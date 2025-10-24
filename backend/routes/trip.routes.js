import express from 'express'
import { generateItinerary } from '../controllers/itinerary.controller.js';
import { tripSuggestions } from '../controllers/suggestions.controller.js';

const tripRouter = express.Router();

tripRouter.post('/generate-itinerary',generateItinerary);
tripRouter.get('/suggested-trips',tripSuggestions);

export default tripRouter;