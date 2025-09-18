const express = require('express');
const bcrypt = require('bcryptjs');      // for hashing passwords
const jwt = require('jsonwebtoken');     // for authentication tokens
const User = require('../models/User');  // User model

const router = express.Router();

// 🔹 Register route
router.post('/register', async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ firstname, lastname, email, password: hashedPassword });
    await user.save();

    res.json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// 🔹 Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, 'secret123', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
