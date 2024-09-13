const Sequelize = require("sequelize");
const DB_CONFIG = require("./db.config.js");

const sequelize = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`,
  {
    dialect: DB_CONFIG.dialect,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: DB_CONFIG.pool.max,
      min: DB_CONFIG.pool.min,
      acquire: DB_CONFIG.pool.acquire,
      idle: DB_CONFIG.pool.idle,
    },
    define: {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const FundraisingPage = require("../models/fundraisingPage.js")(
  sequelize,
  Sequelize.DataTypes
);
const Comment = require("../models/comment.js")(sequelize, Sequelize.DataTypes);
const Donation = require("../models/donation.js")(
  sequelize,
  Sequelize.DataTypes
);

// Associations
FundraisingPage.associate = (models) => {
  FundraisingPage.hasMany(models.Comment, { foreignKey: "page_id" });
  FundraisingPage.hasMany(models.Donation, { foreignKey: "page_id" });
};

Comment.associate = (models) => {
  Comment.belongsTo(models.FundraisingPage, { foreignKey: "page_id" });
  Comment.belongsTo(models.Donation, { foreignKey: "donation_id" });
};

Donation.associate = (models) => {
  Donation.belongsTo(models.FundraisingPage, { foreignKey: "page_id" });
  Donation.hasMany(models.Comment, { foreignKey: "donation_id" });
};

// Associate models
FundraisingPage.associate({ Comment, Donation });
Comment.associate({ FundraisingPage, Donation });
Donation.associate({ FundraisingPage, Comment });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("../models/user")(sequelize);
db.FundraisingPage = FundraisingPage;
db.Comment = Comment;
db.Donation = Donation;

module.exports = db;
