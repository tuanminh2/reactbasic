import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const authCtrl = {
  googleLogin: async (req, res) => {
    try {

      console.log(req.usergg)
      const { name, email, picture } = req.usergg
      const password = email + "your google secret password";
      const passwordHash = await bcrypt.hash(password, 12);

      const user = await User.findOne({ account: email });

      //IF USER REGISTERD THI LOGIN LUON
      if (user) {
        console.log("DANG NHAP NGAY");
        return loginUser(user, password, res);
      } else {
        console.log("DANG KY TRUOC KHI DANG NHAP");
        //KHONG THI DANG KY TAI KHOAN MOI
        const user = {
          name,
          account: email,
          password: passwordHash,
          avatar: picture,
          type: "google",
        };
        return registerUserByGoogleLogin(user, res);
      }


    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const registerUserByGoogleLogin = async (user, res) => {
  const newUser = new User(user);
  await newUser.save();
  const accessToken = jwt.sign({ id: newUser._id }, `${process.env.ACCESS_SECRET}`);
  res.json({
    msg: "Google login (Register + Login) success",
    accessToken,
    user: { ...newUser._doc, password: "" },
  });
};

const loginUser = async (user, password, res) => {
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Password is incorrect" });
  const accessToken = jwt.sign({ id: user._id }, `${process.env.ACCESS_SECRET}`);
  res.json({
    msg: "Login Success!",
    accessToken,
    user: { ...user._doc, password: "" },
  });
};
export default authCtrl;
