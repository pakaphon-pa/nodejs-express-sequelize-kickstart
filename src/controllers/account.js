import accountModel from "../models/account";
import Logger from "../configs/logger";
import { get } from "lodash";

export const createAccount = (req, res) => {
  try {
    const title = get(req, "body.title", null);
    const first_name = get(req, "body.first_name", null);
    const last_name = get(req, "body.last_name", null);
    const email = get(req, "body.email", null);
    const password = get(req, "body.password", null);
    const password_confirm = get(req, "body.password_confirm", null);

    res.status(200).json({
      success: true,
      data: get(req, "body", {}),
    });
  } catch (error) {
    Logger.error(JSON.stringify(error));
  }
};
