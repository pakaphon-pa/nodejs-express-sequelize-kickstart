import db from "../configs/connectDB";
import Sequelize from "sequelize";

const socialModel = db.define(
  "social",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    account_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "account",
        key: "id",
      },
    },
    youtube: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    twitter: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    facebook: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    linkedin: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    instagram: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    github: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    tableName: "social",
  }
);

export default socialModel;
