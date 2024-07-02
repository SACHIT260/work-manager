import  mongoose from 'mongoose'
import {User} from "../models/user"


const config={
    isConnected:0,
}

export const connectDb= async()=>{
    if(config.isConnected){
        return;
    }
    try {
        const {connection}=await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"work_manager",
        });
        console.log("db connected");
        console.log("ready",connection.readyState);
        config.isConnected=connection.readyState;
        console.log("connected with host",connection.host);


       
    } catch (error) {
        console.log("Failed to  connect with database");
        console.log(error);
    }
}