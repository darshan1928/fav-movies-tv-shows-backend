const express = require('express');
const cors = require('cors');
const entryRoutes = require('./routes/entry.routes');
const authRoutes = require('./routes/auth.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173", 
    "https://favorite-movies-tv-shows-web-applic.vercel.app", 
  ],
  credentials: true,
}));
app.use(express.json());

// Static files for image upload
app.use('/uploads', express.static('src/uploads'));

// Routes
app.use('/api/entries', entryRoutes);
app.use('/api/auth', authRoutes);

// Error handler (always last)
app.use(errorHandler);

module.exports = app;
