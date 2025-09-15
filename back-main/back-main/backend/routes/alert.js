const express = require("express");
const router = express.Router();


// POST /api/alert/panic-alert
router.post("/panic-alert", async (req, res) => {
  const { touristId, latitude, longitude } = req.body;

  try {
    const alert = new Alert({
      touristId,
      latitude,
      longitude,
      type: "sos"
    });
    await alert.save();
    res.json({ message: "🚨 SOS Alert Received" });
  } catch {
    res.status(500).json({ error: "❌ Error saving alert" });
  }
});

// POST /api/alert/geo-update
router.post("/geo-update", async (req, res) => {
  const { touristId, latitude, longitude } = req.body;

  try {
    const update = new Alert({
      touristId,
      latitude,
      longitude,
      type: "geo-fence"
    });
    await update.save();
    res.json({ message: "📍 Location Updated" });
  } catch {
    res.status(500).json({ error: "❌ Error saving location" });
  }
});

// GET /api/alert/get-alerts
router.get("/get-alerts", async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ timestamp: -1 });
    res.json(alerts);
  } catch {
    res.status(500).json({ error: "❌ Could not fetch alerts" });
  }
});

module.exports = router;
