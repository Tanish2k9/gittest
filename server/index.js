import express from "express";
import dotenv from "dotenv";
import Connection from "./connect.js";
dotenv.config();
const app = express();

Connection();

app.listen(4000,()=>{
    console.log('app listening on port 3000')
})