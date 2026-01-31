const express = require('express');
const app = express();

// --- Import Routes ---
const testRoutes = require('./routes/testRoutes'); // <-- استيراد ملف الـ routes

// --- Middlewares ---

// --- Routes ---
// app.get('/', (req, res) => { // <-- امسح هذا الجزء القديم
//   res.send('Hello from app.js! Backend is running 🚀');
// });
app.use('/api', testRoutes); // <-- استخدم الـ routes الجديدة

// --- Export the app ---
module.exports = app;
