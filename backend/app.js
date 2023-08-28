import express from 'express';
import mongoose, { Schema } from 'mongoose';
import dotenv from 'dotenv';
import User from './models/user.model.js';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js';

const app = express();
const port = 3001;

app.use(express.json())
dotenv.config();

console.log(process.env.DB_SERVER)

await mongoose.connect(process.env.DB_SERVER)
.then(()=> console.log("Ok we are connected"))
.catch((e) => console.error("Ups, there are errors", e))

//mongoDB settings


app.get("/", (req, res) => {
    res.send("Yop")
})

app.use("/api", userRoutes)
app.use("/api", authRoutes)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
