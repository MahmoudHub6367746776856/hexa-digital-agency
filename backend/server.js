const app = require('./app');
const connectDB = require('./config/db'); // <-- 1. استيراد دالة الاتصال
require('dotenv').config();

// Connect to Database
connectDB(); // <-- 2. تشغيل دالة الاتصال

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}` );
});

