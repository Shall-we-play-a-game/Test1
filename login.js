const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

// Set the view engine
app.set("view engine", "ejs");

// User data (for demonstration purposes only)
const users = [
  { username: "username2", password: "password1" }, // This is perfect
  { username: "user@45", password: "pass" }, // username and password that is not compatible with given conditions
  { username: "*&^%#@@%%^&A", password: "1234567" }, //All usernames and passwords have been tested
];

// Login route
// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Validate username
  const usernameRegex = /^[a-zA-Z0-9]{6,12}$/;
  if (!usernameRegex.test(username)) {
    return res.status(400).json({ error: "Invalid username format" });
  }

  // Validate password
  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password should be at least 6 characters long" });
  }

  // Authenticate user
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  // Successful login
  res.json({ message: "Login successful", redirect: "home" });
});

// Render the home view
app.get("/home", (req, res) => {
  res.render("home");
});

// Render the login view
app.get("/login", (req, res) => {
  res.render("login");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
