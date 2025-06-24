// mapping the URL with the controller function

import express from "express";
import searchUser from "../controllers/user.controller.js";
import connectDB from "../config/db.js";


const router =  express.Router();

/**
 * @swagger
 * /api/search:
 *   get:
 *     summary: Search for a user by email
 *     description: Returns a user document if found in the database.
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *           format: email
 *         required: true
 *         description: The email address of the user to search for
 *     responses:
 *       200:
 *         description: A user object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 email:
 *                   type: string
 *                 name:
 *                   type: string
 *       404:
 *         description: No user found
 *       400:
 *         description: Invalid email input
 *       500:
 *         description: Server error
 */
// mapping API route(endpoint) => api/search?email=... to searchUser function
router.get('/search', searchUser)

export default router;