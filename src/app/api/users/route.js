import { User } from "@/models/user";
import { connectDb } from "@/helper/db";

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

connectDb();

export async function GET(request){
    let users=[];
    try {
        await connectDb();
        users=await User.find().select("-password");
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to  get  users",
            success:false
        });
    }

    return NextResponse.json(users);
}


export async  function POST(request){
    //Fetch user details from request
    const {name,email,password,about,profileURL}=await request.json();
    //create user object with user model
    const user=new User({
        name,
        email,
        password,
        about,
        profileURL
    });
    try {
        ///to save user in database
        user.password=bcrypt.hashSync(
            user.password,
            parseInt(process.env.BCRYPT_SALT)
        );
        await connectDb();
        const createdUser=await user.save();
        const response=NextResponse.json(user,{
            status:201,
        });
        return response;

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create user!!",
            status:false
        },{
            status:500,
        });
    }
}
export function DELETE(){
    console.log("Delete Api Called");
    return NextResponse.json({
        message:"Deleted",
        status:true,
    },
    {status:201, statusText:"hey change text"}
);
}