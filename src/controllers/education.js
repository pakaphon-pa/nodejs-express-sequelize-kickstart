import Logger from "../configs/logger";
import { get } from "lodash";
import educationModel from "./../models/education";

export const createEducation = async (req, res) => {
  try {
    const accountId = get(req, "user", null);
    const school = get(req, "body.school", null);
    const degree = get(req, "body.degree", null);
    const fieldofstudy = get(req, "body.fieldofstudy", null);
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

    const created = await educationModel.create({
      account_id: accountId,
      school: school,
      degree: degree,
      fieldofstudy: fieldofstudy,
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

export const updateEducation = async (req, res) => {
  try {
    const id = (req, "params", null);

    const updated = await educationModel.update(
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

export const deletedEducation = async (req, res) => {
  try {
    const id = (req, "params", null);

    const deleted = await educationModel.destroy(id);

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
