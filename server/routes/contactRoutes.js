import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone)
      return res.status(400).json({ error: "All fields are required" });

    await Contact.create({ name, email, phone });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
