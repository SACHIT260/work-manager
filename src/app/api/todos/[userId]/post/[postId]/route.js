import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";


connectDb();
export function DELETE(request,{params}){
    console.log(params);
    // const {userId}=params;
    // console.log("user Id", userId)
    return NextResponse.json({
        message:"Testing Delete"
    }
    )
}