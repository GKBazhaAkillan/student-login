const { default: mongoose } = require("mongoose");

const db = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);

    if (res) {
      console.log("connected");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = db;
