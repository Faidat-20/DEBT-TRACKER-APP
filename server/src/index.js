import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import customerRoutes from "./routes/customers.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});