const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectMongo = require('./db/mongo');
const { connectPostgres } = require('./db/postgres');


const touristRoutes = require('./routes/tourist');
const alertRoutes = require('./routes/alert');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to databases
connectMongo();
connectPostgres();

// Routes
app.use('/api/tourist', touristRoutes);
app.use('/api/alert', alertRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('✅ Smart Tourist Safety Backend is Running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is live at http://localhost:${PORT}`);
});
