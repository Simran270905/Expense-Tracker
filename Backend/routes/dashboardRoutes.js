// backend/routes/dashboardRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getDashboardData } = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", protect, getDashboardData); // This maps to /api/v1/dashboard

module.exports = router;
