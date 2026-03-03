import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
// import dotenv from "dotenv";
// dotenv.config();
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";

// dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());


// ✅ ADD THIS ROUTE
app.get("/", (req, res) => {

  res.send("FlavorAI Backend is Running ✅");

});


// routes
app.use("/api/auth", authRoutes);

app.use("/api/recipe", recipeRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
console.log(`Server running on ${PORT}`));
console.log("ENV PATH TEST:", process.cwd());
