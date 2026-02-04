const express = require("express");
const cors = require("cors");

const app = express();

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- Routes ---
const testRoutes = require("./routes/testRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use("/api", testRoutes);
app.use("/api", contactRoutes);

// --- Export app ---
module.exports = app;
