import accountModel from "../models/account";
import Logger from "../configs/logger";
import { get, toLength } from "lodash";
import { generateSalt, hasher } from "../utils/hashed";

export const createAccount = async (req, res) => {
  try {
    const title = get(req, "body.title", null);
    const first_name = get(req, "body.first_name", null);
    const last_name = get(req, "body.last_name", null);
    const email = get(req, "body.email", null);
    const password = get(req, "body.password", null);
    const password_confirm = get(req, "body.password_confirm", null);

    const existing = await accountModel.findOne({ email: email });

    if (existing)
      return res
        .status(400)
        .json({ success: false, error: true, message: "EMAIL IS EXISTING" });

    if (password !== password_confirm)
      return res.status(400).json({
        success: false,
        error: true,
        message: "PASSWORD IS NOT MATCH",
      });

    const salt = await generateSalt(12);

    const hashed = await hasher(password, salt);
    console.log(salt);
    console.log(hashed);
    const userEntry = {
      title: title,
      first_name,
      last_name,
      email,
      password: hashed,
      salt: salt,
    };

    const created = await accountModel.create(userEntry);

    res.status(200).json({
      success: true,
      error: false,
      data: created,
    });
  } catch (error) {
    Logger.error(JSON.stringify(error));
    return res.json(500).json({
      success: false,
      error: true,
      message: JSON.stringify(error),
    });
  }
};
