import admin from "../config/fbConfig.js";

export const decodeToken = async (req, res, next) => {
  console.log(req.body);
  const token = req.body.idToken;
  try {
    const decodeValue = await admin.auth().verifyIdToken(token);
    if (decodeValue) {
      req.user = decodeValue;
      console.log("Success ", decodeValue);
      return next();
    }
    return res.json({ message: "Un authorize" });
  } catch (e) {
    return res.json({ message: "Internal Error" });
  }
};
