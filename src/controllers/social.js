import Logger from "../configs/logger";
import { get } from "lodash";
import socialModel from "./../models/social";

export const upsertSocial = async (req, res) => {
  try {
    const accountId = get(req, "user", null);
    const account = await accountModel.findOne({
      where: { id: accountId },
      attributes: { exclude: ["password", "salt"] },
    });

    if (!account)
      return res
        .status(404)
        .json({ success: false, error: true, message: "ACCOUNT NOT FOUND!" });

    const social = await socialModel.findOne({
      where: { account_id: accountId },
    });

    if (social) {
      const updated = await socialModel.update(
        {
          ...req.body,
        },
        { where: { id: social.id } }
      );

      return res.status(200).json({
        success: true,
        error: false,
        data: updated,
      });
    } else {
      const created = await socialModel.create({ ...req.body });

      return res.status(200).json({
        success: true,
        error: false,
        data: created,
      });
    }
  } catch (error) {
    Logger.error(JSON.stringify(error));
    return res.status(500).json({
      success: false,
      error: true,
      message: JSON.stringify(error),
    });
  }
};
