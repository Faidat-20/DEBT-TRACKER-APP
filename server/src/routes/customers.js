import express from "express";
import Customer from "../models/Customer.js";
import requireAuth from "../middleware/auth.js";

const router = express.Router();

router.use(requireAuth);

router.post("/", async (req, res) => {
  try {
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ message: "Name and phone are required" });
    }

    const customer = await Customer.create({
      userId: req.userId,
      name,
      phone,
    });

    res.status(201).json(customer);
  } catch (error) {
    console.error("Create customer error:", error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find({ userId: req.userId }).sort({
      createdAt: -1,
    });

    res.json(customers);
  } catch (error) {
    console.error("List customers error:", error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;