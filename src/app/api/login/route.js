import { NextResponse } from "next/server";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


export  async function POST(request){
    const {email,password}=await request.json()

    try {
        await connectDb();

        //1. get user
        const user=await User.findOne({
            email:email,
        });

        if(user==null){
            throw new Error("user not found");
        }

        //2.password check
        const matched=bcrypt.compareSync(password,user.password)
        if(!matched){
            throw new Error("Password not matched!!");
        }

        //3.Generate token
        const token=jwt.sign({
            _id:user._id,
            name:user.name
        },process.env.JWT_KEY)
        

        //4.Create nextresponse using cookie
        const response=NextResponse.json({
            message:"Login success",
            success:true,
            user:user
        })

        response.cookies.set("authToken",token,{
            expiresIn:"1d",
            httpOnly:true,
            
        })


        console.log(user);
        console.log("token",token);
        return response;
    } catch (error) {
        return NextResponse.json({
            message:error.message,
            success:false,
        },
    {
        status:500,
    }
    );

    }
}