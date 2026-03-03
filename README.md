# 🍽️ Flavor AI

Flavor AI is a full-stack AI-powered food recipe generator built using the MERN stack and Groq LLM.  
Users can generate detailed recipes based on available ingredients and save their favorite recipes.

---

## 🚀 Features

- 🤖 AI-powered recipe generation (Groq LLM)
- 🔐 User authentication (JWT based)
- ❤️ Save favorite recipes
- 📜 View saved recipes
- 🌙 Modern responsive UI
- 🗄 MongoDB database integration

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Groq API (LLM)

---

## 📂 Project Structure
food_app/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── .env
│
└── frontend/
├── src/
├── components/
├── pages/
└── services/


---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/flavor-ai.git
cd flavor-ai
2️⃣ Setup Backend
cd backend
npm install

Create .env file inside backend:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/flavorai
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_groq_api_key

Run backend:

npm run dev
3️⃣ Setup Frontend
cd frontend
npm install
npm run dev
