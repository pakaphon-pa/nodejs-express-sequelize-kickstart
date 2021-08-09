import Logger from "../configs/logger";
import { get } from "lodash";
import experienceModel from "./../models/experience";

export const createExperience = async (req, res) => {
  try {
    const accountId = get(req, "user", null);
    const title = get(req, "body.title", null);
    const company = get(req, "body.company", null);
    const location = get(req, "body.location", null);
    const from = get(req, "body.from", null);
    const to = get(req, "body.to", null);
    const current = get(req, "body.current", null);
    const description = get(req, "body.description", null);

    const account = await accountModel.findOne({
      where: { id: accountId },
      attributes: { exclude: ["password", "salt"] },
    });

    if (!account)
      return res
        .status(404)
        .json({ success: false, error: true, message: "ACCOUNT NOT FOUND!" });

    const created = await experienceModel.create({
      account_id: accountId,
      title: title,
      company: company,
      location: location,
      from: from,
      to: to,
      current: current,
      description: description,
    });

    res.status(200).json({
      success: true,
      error: false,
      data: created,
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

export const updateExperience = async (req, res) => {
  try {
    const id = (req, "params", null);

    const updated = await experienceModel.update(
      {
        ...req.body,
      },
      { where: { id } }
    );

    res.status(200).json({
      success: true,
      error: false,
      data: updated,
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

export const deletedExperience = async (req, res) => {
  try {
    const id = (req, "params", null);

    const deleted = await experienceModel.destroy(id);

    res.status(200).json({
      success: true,
      error: false,
      data: deleted,
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
