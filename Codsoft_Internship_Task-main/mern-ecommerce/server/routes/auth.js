const express = require("express");
const router = express.Router();

// Mock register
router.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  // In a real app, create user in DB. Here return success.
  return res.status(201).json({ message: "User registered", data: { email } });
});

// Mock login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Missing email or password" });
  // In a real app, verify credentials. Here accept any credentials.
  return res.status(200).json({ message: "Login successful", user: { email } });
});

module.exports = router;
