const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("../Backend/routes/User");
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./config/database");
const path = require("path");
const session = require("express-session");
const passport = require("./auth"); // Import Passport middleware
const { isLoggedIn } = require("./auth"); // Import isLoggedIn middleware

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));

// Configure session middleware
// app.use(
//   session({
//     name: "token",
//     secret: "cats",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // Initialize Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Authentication routes
// app.get("/", (req, res) => {
//   res.send('<a href="/auth/google">Authenticate with Google</a>');
// });

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "/",
//     failureRedirect: "/auth/google/failure",
//   })
// );

// app.get("/auth/google/failure", (req, res) => {
//   res.send("Failed to authenticate..");
// });

// Serve static files
app.get("/*", (req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");
  res.sendFile(filePath);
});

dotenv.config();
database.connect();

app.use("/user", userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
