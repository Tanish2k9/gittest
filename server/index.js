import express from "express";
import dotenv from "dotenv";
import Connection from "./connect.js";
import userRoutes from "./routes/user.route.js";
dotenv.config();
const app = express();

Connection();

app.use('/api/users',userRoutes);

app.listen(3000,()=>{
    console.log('app listening on port 3000')
})