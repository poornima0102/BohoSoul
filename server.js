import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'
dotenv.config(); //loads env variables from .env file into process.env

//connect database
connectDB();
//rest object
const app=express();//creates express app instance

//middlewares
app.use(cors())
app.use(express.json()) //parses incoming JSON requests.
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)

//rest api
app.get("/",(req,res)=>{
    res.send({
        message:"Welcome to ecommerce website",
    });
});

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`.bgCyan.white);
});