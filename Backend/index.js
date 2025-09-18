require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

// Example route
app.get('/', (req, res) => {
  res.json([
    { "id": "1", "title": "Book Review: The Name of the Wind" },
    { "id": "2", "title": "Game Review: Pokemon Brilliant Diamond" },
    { "id": "3", "title": "Show Review: Alice in Borderland" }
  ]);
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 4000}`);
});
