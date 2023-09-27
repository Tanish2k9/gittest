import express from "express";
import dotenv from "dotenv";
import Connection from "./connect.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
const app = express();

Connection();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);

app.listen(3000,()=>{
    console.log('app listening on port 3000')
})