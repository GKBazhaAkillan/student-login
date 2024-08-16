const userModel = require("../schema/userSchema");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const {  user_email, user_password } = req.body;
  try {
    const Exist = await userModel.findOne({ user_email });
    if (Exist) {
      return res.status(400).send({ message: "Already Exist" });
    } else {
      const user = await userModel.create({
        
        user_email,
        user_password: bcrypt.hashSync(user_password, 10),
      });
      if (user) {
        return res.status(201).send({ message: "created", data: user });
      }
      return res.status(400).send({ message: "not available" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
exports.loginUser = async (req, res) => {
  const { user_email, user_password } = req.body;
  try {
    const Exist = await userModel.findOne({ user_email });
    if (Exist) {
      const passMatch = bcrypt.compareSync(user_password, Exist.user_password);
      if (passMatch) {
        const token = jwt.sign({ id: Exist._id }, "akil", { expiresIn: "1m" });
        return res.status(200).send({ message: "success", data: token });
      }
    } else {
      return res.status(400).send({ message: "not match" });
    }
    return res.status(400).send({ message: "not available" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
