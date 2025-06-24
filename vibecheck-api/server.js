import express from 'express'
import connectDB from './config/db.js'
import dotenv from "dotenv" 

import authRoutes from './routes/auth.js'
import vibeRoutes from './routes/vibes.js'

const app = express()
app.use(express.json())

dotenv.config()

connectDB()

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/vibes', vibeRoutes)

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server blasting off on port ${process.env.PORT}`)
})
