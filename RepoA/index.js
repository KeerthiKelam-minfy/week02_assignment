// This is Easy Assignment only.

import express from "express"

const app = express()
app.use(express.json())

const sampleVibes = [
    {
        id: 1,
        vibeText: "Just posted my first vibe from the API!",
        mood: "chill",
    },
    {
        id: 2,
        vibeText: "This is very sad",
        mood: "sad",
    },
    {
        id: 3,
        vibeText: "Oh! This is very nice",
        mood: "happy",
    }
]

// ROOT endpoint
app.get("/", (req, res) => {
    res.status(200).json("Welcome to VibeCheck!!")
})

// all vibes end point.
app.get("/api/v1/vibes", (req, res) => {
    res.status(200).json(sampleVibes)
})

app.get("/api/v1/vibes/:id", (req, res) => {
    const vibeId = parseInt(req.params.id)
    const vibe = sampleVibes.find(v => v.id === vibeId)

    if(!vibe) {
        return res.status(404).json({ "success": false, "message": "That vibe is off the grid, not found." })
    }

    res.status(200).json(vibe)
})


const PORT = 5000

app.listen(PORT, () => {
    console.log("Server blasting off at 5000")
})