const { DataTypes } = require("sequelize");
const user = require("./user");

module.exports = (sequelize) => {
  const Donation = sequelize.define(
    "Donation",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      page_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "FundraisingPage",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      tableName: "donations",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Donation.associate = function (models) {
    Donation.belongsTo(models.FundraisingPage, { foreignKey: "page_id" });
    Donation.hasMany(models.Comment, { foreignKey: "donation_id" });
    Donation.belongsTo(models.User, { foreignKey: "user_id" });
  };

  return Donation;
};
