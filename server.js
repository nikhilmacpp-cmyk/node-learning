import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes'

require("dotenv").config();

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/users',userRouter);

mongoose.connect(process.env.MONGO_URI)
.then((res)=>console.log('MongoDb connected'))
.catch((err)=> console.log('Error connecting MongoDB',err))

app.get("/",(req,res)=>{
    try{
        res.send("GET MESSAGE : server is running ")
    }catch(er){
        res.status(500).send("GET MESSAGE : Something went wrong");
    }
})

app.listen(PORT,()=>{
    console.log("Server running on port 3000");
})