import db from "../configs/connectDB";
import Sequelize from "sequelize";
import experienceModel from "./experience";
import educationModel from "./education";
import socialModel from "./social";

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

accountModel.hasMany(experienceModel, {
  foreignKey: "account_id",
  sourceKey: "id",
});

experienceModel.belongsTo(accountModel, {
  foreignKey: "account_id",
  targetKey: "id",
});

accountModel.hasMany(educationModel, {
  foreignKey: "account_id",
  sourceKey: "id",
});

educationModel.belongsTo(accountModel, {
  foreignKey: "account_id",
  targetKey: "id",
});

accountModel.hasOne(socialModel, {
  foreignKey: "account_id",
  sourceKey: "id",
});

socialModel.belongsTo(accountModel, {
  foreignKey: "account_id",
  targetKey: "id",
});

export default accountModel;
