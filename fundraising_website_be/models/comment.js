const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Comment = sequelize.define(
    "Comment",
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
      donation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Donation",
          key: "id",
        },
        unique: true,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "comments",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Comment.associate = function (models) {
    Comment.belongsTo(models.FundraisingPage, {
      foreignKey: "page_id",
      as: "fundraisingPage",
    });
    Comment.belongsTo(models.Donation, {
      foreignKey: "donation_id",
      as: "Donation",
    });
  };

  return Comment;
};
