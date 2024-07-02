
import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";




//get single task
export async function  GET(request,{params}){

    const {taskId}=params;

    try {
        await connectDb();
        const task=await Task.findById(taskId);
        return NextResponse.json(task);
    } catch (error) {
        return getResponseMessage("Error in getting task",404,false);
    }
}

//Update a task
export async function PUT(request,{params}){
    try {
        const {taskId}=params;
    
        const {title,content,status}=await request.json();
    
        let task=await Task.findById(taskId);
    
        (task.title=title),(task.content=content),(task.status=status);
        await connectDb();
        const updatedTask=await task.save();
        return NextResponse.json(updatedTask);
        
    } catch (error) {
        console.log(error);

        return getResponseMessage("Failed to update the task!!",500,false);
    }
}

//Delete a task

export async function DELETE(request,{params}){
    try {
        const {taskId}=params;
    
        
        await connectDb();
        await Task.deleteOne({
           _id: taskId,
        }
        );
    
        return getResponseMessage("Task Deletd!",200,true);
        
    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to delete the task!!",500,false);
    }
}
