require('dotenv').config(); // <-- السطر الجديد الأول
const express = require('express');
const app = express();

// تعديل بسيط هنا
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}` );
});
