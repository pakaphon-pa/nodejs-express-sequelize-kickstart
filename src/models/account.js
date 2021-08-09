import db from "../configs/connectDB";
import Sequelize from "sequelize";
import educationModel from "./experience";

const accountModel = db.define(
  "account",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
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
    tableName: "account",
  }
);

accountModel.hasMany(educationModel, {
  foreignKey: "account_id",
  sourceKey: "id",
});

educationModel.belongsTo(accountModel, {
  foreignKey: "account_id",
  targetKey: "id",
});

export default accountModel;
