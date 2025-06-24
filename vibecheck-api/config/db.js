import mongoose from "mongoose";


async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL)
        // const conn = await mongoose.connect("mongodb+srv://keerthikelam:bCER0IkEdp6IFHJo@cluster0.2u8dz9s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`MongoDB connected ${conn.connection.host}`)
    }catch(error) {
        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;