const express = require('express');
const router = express.Router();

// هذا الـ route الآن مرتبط بالمسار /
router.get('/', (req, res) => {
  res.send('Hello from a separate Routes file! 🚀');
});

// يمكننا إضافة route آخر هنا للتجربة
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Backend is healthy' });
});

module.exports = router;
