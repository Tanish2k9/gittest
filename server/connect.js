import mongoose from "mongoose";


const Connection = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log("db connection successfully")
    } catch (error) {
        console.log("db connection failed ",error);
    }
    
}
export default Connection;