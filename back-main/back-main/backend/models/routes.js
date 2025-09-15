const express = require("express");
const router = express.Router();
const pool = require("../db/postgres");

// POST /api/tourist/register
router.post("/register", async (req, res) => {
  const { name, passport, itinerary } = req.body;
  const blockchainId = "BID-" + Math.floor(Math.random() * 1000000);

  try {
    await pool.query(
      "INSERT INTO tourists (name, passport, itinerary, blockchain_id) VALUES ($1, $2, $3, $4)",
      [name, passport, itinerary, blockchainId]
    );
    res.json({ blockchainId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "❌ Error registering tourist" });
  }
});

module.exports = router;
