import mongoose from "mongoose";

// mongodb connection
async function connectDB() {
    try {
        const conn = mongoose.connect(process.env.DATABASE_URI)
        console.log(`MongoDB connected on Port: ${(await conn).connection.host}`)
    }catch(error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;