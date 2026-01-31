const express = require('express');
const app = express();

// --- Middlewares (سيتم إضافة المزيد هنا لاحقاً) ---

// --- Routes ---
app.get('/', (req, res) => {
  res.send('Hello from app.js! Backend is running 🚀');
});

// --- Export the app ---
module.exports = app; // <-- أهم سطر: تصدير التطبيق ليستخدمه server.js
