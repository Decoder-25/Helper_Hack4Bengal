import express from 'express';
import dotenv from 'dotenv';

//DOTENV config
dotenv.config();

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

