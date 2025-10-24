import axios from "axios";

const API = axios.create({
  baseURL: "https://travel-ai-backend-five.vercel.app/api",
});

// Generate Itinerary
export const generateItinerary = async (formData) => {
  try {
    const response = await API.post("/trip/generate-itinerary", formData);
    return response.data;
  } catch (error) {
    console.error("Error generating itinerary:", error);
    throw error;
  }
};

// // Get Suggested Trips
// export const getSuggestedTrips = async () => {
//   try {
//     const response = await API.get("/suggested-trips");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching trips:", error);
//     throw error;
//   }
// };
