import mongoose from "mongoose";

// This is for connecting the mongoDB database.
async function connectDB() {
  try{
  const conn = await mongoose.connect(process.env.DATABASE_URI);
 // console.log(conn) // mongoose conn object
  console.log(`MongoDB Connected: ${conn.connection.host}`);
}catch(error) {
  console.log(`Error: ${error.message}`)
  process.exit(1) // here, 1 is a status code.
}
}

export default connectDB