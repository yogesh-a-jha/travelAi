import express from "express";
import 'dotenv/config'
import cors from "cors";
import connectDB from "./configs/db.js";
import tripRouter from "./routes/trip.routes.js";

connectDB();


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/trip',tripRouter)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/',(req,res)=>{
    res.send('server is running')
})