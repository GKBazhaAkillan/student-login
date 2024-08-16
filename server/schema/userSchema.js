const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      require: "true",
    },
    user_email: {
      type: String,
      require: "true",
      unique: "true",
    },
    user_password: {
      type: String,
      require: "true",
    },
    user_address: {
      
    
    
      district: { type: String, default: "" },
      state: { type: String, default: "" },
    },
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("user",UserSchema);
module.exports = userModel;
