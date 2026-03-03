import express from "express";

import protect from "../middleware/authMiddleware.js";

import {

generateRecipe,

saveFavorite,

getFavorites

}

from "../controllers/recipeController.js";

const router = express.Router();

router.post("/generate",
generateRecipe);

router.post("/favorite",

saveFavorite);

router.get("/favorite",

getFavorites);

export default router;