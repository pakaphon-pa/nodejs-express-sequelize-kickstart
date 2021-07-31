import crypto from "crypto";

export const generateSalt = (rounds) => {
  return crypto.randomBytes(rounds).toString("hex");
};

export const hasher = (password, salt) => {
  let hash = crypto.createHmac("sha512", salt);
  hash.update(password);

  return hash.digest("hex");
};

// NOTE: hash object { hashedpassword: "ABC", salt: "123124ss" }

export const compare = (password, hash) => {
  if (password == null || hash == null) {
    throw new Error("password and hash is required to compare");
  }
  if (typeof password !== "string" || typeof hash !== "object") {
    throw new Error("password must be a String and hash must be an Object");
  }
  let passwordData = hasher(password, hash.salt);
  if (passwordData.hashedpassword === hash.hashedpassword) {
    return true;
  }
  return false;
};
