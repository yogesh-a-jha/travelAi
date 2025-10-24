import mongoose from "mongoose";

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

export default Trip;