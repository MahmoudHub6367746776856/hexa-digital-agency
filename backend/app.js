const express = require('express');
const cors = require('cors'); // <-- 1. استيراد المكتبة
const app = express();

// --- Import Routes ---
const testRoutes = require('./routes/testRoutes');

// --- Middlewares ---
app.use(cors()); // <-- 2. استخدام المكتبة

// --- Routes ---
app.use('/api', testRoutes);

// --- Export the app ---
module.exports = app;
