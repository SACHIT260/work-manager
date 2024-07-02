import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";



//Getting one user

export async function  GET(request,{params}){
    await connectDb();
    const {userId}=params;
    const user =await User.findById(userId).select("-password");
    return NextResponse.json(user);
}





//Deleting the user
export async function  DELETE(request,{params}){
    console.log(params);
    const {userId}=params;
    try {
        await connectDb();
        await User.deleteOne({
            _id:userId
        });
        return  NextResponse.json({
            message:"user deleted!!",
            success:true,
        });
    } catch (error) {
        return NextResponse.json({
            message:"Error in  deleting user!!",
            success:false
        })
    }
    
}


//Updating user Details

export async  function  PUT(request,{params}){
    const {userId}=params;

    const {name,password,about,profileURL}=await request.json();

    try {
        await connectDb();
        const  user=await User.findById(userId);

        user.name=name;
        user.password=password;
        user.about=about;
        user.profileURL=profileURL;

        const updateUser=await user.save();
        return NextResponse.json(updateUser);
    } catch (error) {
        return NextResponse.json({
            message:"Failed to update User!!",
            success:false
        })
    }
}