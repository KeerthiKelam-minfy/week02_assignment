import express from "express";
import Vibe from "../models/Vibe.js";
import User from "../models/User.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
    const { vibeText, mood } = req.body

    try {
        const newVibe = new Vibe({
            vibeText,
            mood,
            user: req.userId,
        })

        const savedVibe = await newVibe.save()

        res.status(201).json(savedVibe)
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})


// get
router.get("/", async (req, res) => {
    try {
        const vibes = await Vibe.find().populate('user', 'username')
        res.status(200).json(vibes)
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

export default router