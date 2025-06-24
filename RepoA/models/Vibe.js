import mongoose from "mongoose"

const vibeSchema = new mongoose.Schema(
    {
        vibeText: {
            type: String,
            required: true,
        },
        mood: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    }
)


const Vibe = mongoose.model("Vibe", vibeSchema)

export default Vibe;