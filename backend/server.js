const app = require('./app'); // <-- استيراد التطبيق من app.js
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}` );
});
