import Trip from "../models/trip.model.js";



export const tripSuggestions = async (req, res) => {
  try {
    const trips = await Trip.find().limit(10); // fetch top 10 trips
    res.json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch trips" });
  }
};

