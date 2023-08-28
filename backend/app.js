import express from 'express';
import mongoose, { Schema } from 'mongoose';
import dotenv from 'dotenv';
import User from './models/user.model.js';
import userRoutes from './routes/user.route.js'

const app = express();
const port = 3001;

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

app.post("/register", async (req,res) => {
    
    User.register({username: req.body.username}, req.body.password, (err, user) => {
        if(err){
            console.log(err);
        } else {
            
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
