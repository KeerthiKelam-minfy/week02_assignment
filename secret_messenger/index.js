import express from "express";
import z from "zod";
import { config } from "dotenv";
import connectDB from './config/db.js'
import Message from "./models/messages.models.js";

config()

connectDB()

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json(
    "Welcome to Secret message! post message at /message end point and your crush will never find out who send it"
  );
});

const messageSchema = z.object({
  message: z.string().min(3).max(150),
});

const messages = [];

app.get("/message", (req, res) => {
  // TODO: work in progress here
  console.log(process.env.DATABASE_URI)
  res.status(200).send(messages);
});

app.post("/message", async (req, res) => {
  const message = req.body.message;
  const validateMessage = messageSchema.safeParse(req.body);
  console.log(validateMessage?.error);
  messages.push(message);
  const messageStored = await Message.create({ message })
  // console.log(messageStored)
  res.status(201).json({
    response: "successfull! added yout message😱!!!!!",
    id: messageStored._id
  });
});

// global catch

app.listen(process.env.PORT, () => {
  console.log(`Listening at port ${process.env.PORT}`);
});
