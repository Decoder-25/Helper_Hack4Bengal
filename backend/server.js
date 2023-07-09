import express from 'express';


//rest objects
const app = express();

//routes
app.get('/', (req,res) =>{
    req.send("hello world!");
});

//listen
app.listen(8000, () => {
    console.log(`listening on port 8000`);
})

