const { DataTypes } = require("sequelize");
const comment = require("./comment");

module.exports = (sequelize) => {
  const FundraisingPages = sequelize.define(
    "FundraisingPages",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      version: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "fundraising_pages",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  FundraisingPages.associate = function (models) {
    FundraisingPages.hasMany(models.Comment, { foreignKey: "page_id" });
    FundraisingPages.hasMany(models.Donation, { foreignKey: "page_id" });
  };

  return FundraisingPages;
};
