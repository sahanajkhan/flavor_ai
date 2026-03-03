import User from "../models/User.js";
import OpenAI from "openai";

export const generateRecipe = async (req, res) => {

  try {

    // 🔥 Create client INSIDE function (after dotenv loads)
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      baseURL: "https://api.groq.com/openai/v1"
    });

    const { ingredients } = req.body;

    if (!ingredients) {
      return res.status(400).json({
        error: "Ingredients required"
      });
    }

 const completion = await client.chat.completions.create({
  model: "llama-3.1-8b-instant",
  messages: [
    {
      role: "system",
      content: "You are a professional chef."
    },
    {
      role: "user",
      content: `Create a detailed recipe using ${ingredients}. Include recipe name, ingredients list, and step-by-step instructions.`
    }
  ],
  temperature: 0.7
});

    return res.status(200).json({
      recipe: completion.choices[0].message.content
    });

  } catch (error) {

    console.error("🔥 Groq Error:", error);

    return res.status(500).json({
      error: "Recipe generation failed"
    });
  }
};


export const saveFavorite = async (req, res) => {

  const user = await User.findById(req.user._id);

  user.favorites.push(req.body.recipe);

  await user.save();

  res.json(user.favorites);
};


export const getFavorites = async (req, res) => {

  const user = await User.findById(req.user._id);

  res.json(user.favorites);
};