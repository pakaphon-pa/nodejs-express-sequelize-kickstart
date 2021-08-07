import crypto from "crypto";

export const generateSalt = async (rounds) => {
  return crypto.randomBytes(rounds).toString("hex");
};

export const hasher = async (password, salt) => {
  let hash = crypto.createHmac("sha512", salt);
  hash.update(password);

  return hash.digest("hex");
};

// NOTE: hash object { password: "ABC", salt: "123124ss" }

export const compare = async (plainTextPassword, hash) => {
  if (plainTextPassword == null || hash == null) {
    throw new Error("password and hash is required to compare");
  }
  if (typeof plainTextPassword !== "string" || typeof hash !== "object") {
    throw new Error("password must be a String and hash must be an Object");
  }
  let passwordData = await hasher(plainTextPassword, hash.salt);
  if (passwordData === hash.password) {
    return true;
  }
  return false;
};
