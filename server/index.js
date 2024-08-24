const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const connectDatabase = require("./db/db");
const userRoute = require("./routes/userRoute");
//env config
dotenv.config({ path: path.join(__dirname, ".", ".env") });

//cors
app.use(
  cors({ origin: "https://front.akillan.in",
  methods: ["GET","POST"],
  allowedHeaders: ["Content-Type"],
}));
app.options("*", cors());

//middleware
app.use(express.json());
app.use(morgan("tiny"));

// connect database
connectDatabase();

// Routes
app.use("/", userRoute);
// Example routes
app.get("/createUser", (req, res) => {
  // Handle GET request for createUser
  res.json({ message: "User created" });
});

app.post("/createUser", (req, res) => {
  // Handle POST request for createUser
  res.json({ message: "User created" });
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
