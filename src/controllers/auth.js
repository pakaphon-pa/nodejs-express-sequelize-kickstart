import accountModel from "../models/account";
import Logger from "../configs/logger";
import { get } from "lodash";
import { compare } from "../utils/hashed";
import jwt from "jsonwebtoken";
import constant from "../configs/constant";

export const authenication = async (req, res) => {
  try {
    const email = get(req, "body.email", null);
    const password = get(req, "body.password", null);

    const account = await accountModel.findOne({ where: { email: email } });

    if (!account) {
      return res.status(401).json({
        success: false,
        error: true,
        message: "EMAIL IS NOT EXISTING",
      });
    }

    const compasePassword = await compare(password, account);

    console.log(compasePassword);

    if (!compasePassword) {
      return res.status(401).json({
        success: false,
        error: true,
        message: "email or password is incorrect",
      });
    }

    const token = await jwt.sign({ _id: account.id }, constant.JWT);

    return res.status(200).json({
      success: true,
      error: false,
      data: {
        jwtToken: token,
      },
    });
  } catch (error) {
    Logger.error(JSON.stringify(error));
    return res.status(500).json({
      success: false,
      error: true,
      message: JSON.stringify(error),
    });
  }
};
