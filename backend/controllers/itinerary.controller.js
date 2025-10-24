import openai from "../configs/openAi.js";



export const generateItinerary = async (req, res) => {
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
};