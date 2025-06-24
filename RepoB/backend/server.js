import express from "express"
import userRoute from "./routes/user.routes.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

import cors from "cors";

dotenv.config()
const app = express()

app.use(cors()); // Allow cross-origin requests

connectDB()

app.use(express.json())


// --- Swagger-JSDoc Configuration ---
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple Users API (Auto-generated)',
      version: '1.0.0',
      description: 'A basic API for managing users, documented with Swagger-JSDoc.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  // Path to the API docs
  apis: ['./routes/*.js'],
};

// Generate the OpenAPI specification
const openapiSpecification = swaggerJSDoc(options);

// --- Serve the Swagger UI ---
// You can delete the yaml.load() part now
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.get('/', (req, res) => {
    res.send('Cheat Buster API is running!');
});

// Use our user routes for any path starting with /api
app.use("/api", userRoute)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running at Port ${PORT}`)
})