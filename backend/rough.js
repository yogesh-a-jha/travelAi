import express from "express";
import 'dotenv/config'
import cors from "cors";
import mongoose from "mongoose";
import OpenAI from "openai";



const app = express();
app.use(cors());
app.use(express.json());

// MongoDB setup (example collection: suggestedTrips)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const tripSchema = new mongoose.Schema({
  destination: String,
  description: String,
  highlights: [String],
  bestTime: String,
  budget: String,
  activities: [String],
  rating: Number,
  image: String,
});
const Trip = mongoose.model("Trip", tripSchema);

// OpenAI setup
const openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

// Generate AI itinerary
app.post("/api/generate-itinerary", async (req, res) => {
  try {
    const { destination, startDate, endDate, interests } = req.body;

    const prompt = `
    You are an expert travel planner with real-world knowledge.
    Generate a detailed, well-researched travel itinerary in Markdown format with emojis.
    Destination: ${destination}
    Dates: ${startDate} to ${endDate}
    Interests: ${interests.join(", ")}

    Use this structure:
    # Your Personalized Trip to ${destination}
    - Trip Overview
    - Current Weather descriptions
    - Day 1, Day 2, … with Morning, Afternoon, Evening
    - Travel Tips
    - Estimated Budget

    Include realistic attractions, food, culture, and activities based on ${destination} and interests.
    `;

    const {choices} = await openai.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [               
                {
                    role: "user",
                    content: prompt,
                },
            ],
    });

    const itinerary = choices[0].message.content;

    res.json({ itinerary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate itinerary" });
  }
});

// Suggested trips from DB
app.get("/api/suggested-trips", async (req, res) => {
  try {
    const trips = await Trip.find().limit(10); // fetch top 10 trips
    res.json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch trips" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/',(req,res)=>{
    res.send('server is running')
})