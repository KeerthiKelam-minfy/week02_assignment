import mongoose from "mongoose";


// defining the Schema
const messageSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: [true, "Pleae provide a message to send."],
        }
    },
    {
        timestamps: true,
    }
)


// The model is a wrapper on the Schema that provides an interface to the Schema.
// 'Message' will be turned into a collection named 'messages' in MongoDB
const Message = mongoose.model("Message", messageSchema)

export default Message