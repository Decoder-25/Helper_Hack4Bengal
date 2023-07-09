import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";

//files import
import connectDB from "./config/db.js";

//DOTENV config
dotenv.config();

//mongodb connection 
connectDB();

//rest objects
const app = express();

//routes
app.get('/', (req,res) =>{
    req.send("hello world!");
});
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

