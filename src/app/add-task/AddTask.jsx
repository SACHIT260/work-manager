"use client";

import React, { useState } from 'react'
import loginSvg from "../../assets/login.svg";
import Image from 'next/image';
import { addTask } from '@/services/taskService';
import { toast } from "react-toastify";

// import { Task } from '@/models/task';




const AddTask = () => {
  // console.log("task commponent");


  const [task,setTask]=useState({
    title:"",
    content:"",
    status:"none",
    userId:"",
  })

  const handleAddTask=async (event)=>{
    event.preventDefault();
    console.log(task);

    try {
      const result=await addTask(task);
      console.log(result);
      toast.success("Your task is added!!",{
        position:'top-center'
      })
      setTask({
        title:"",
        content:"",
        status:"none",
      })
    } catch (error) {
      console.log(error);
      toast.error("Failed to add task",{
        position:'top-center'
      })
    }
  }

  const resetForm=()=>{
    setTask({
      title:"",
      content:"",
      status:"none",
    })
  }
  return (
    <div className='grid grid-cols-12 justify-center'>
        <div className=' col-span-4 col-start-5  p-5 shadow-sm'>
          <div className='my-8 flex justify-center'>
            <Image src={loginSvg} styles={{width:"50%"}} alt='login_img'/>
          </div>
            <h1 className='text-3xl text-center'>Add your task here</h1>

            <form action="#!" onSubmit={handleAddTask}>

              {/* task title */}
              <div className='mt-4'>
                <label 
                htmlFor="task_title"
                className='block text-sm font-medium mb-2'
                >Title</label>
                <input 
                type="text" 
                className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800' 
                id='task_title'
                name='task_title'
                onChange={(event)=>{
                  setTask({
                    ...task,
                    title:event.target.value,

                  });
                }}
                value={task.title}
                />
              </div>


                {/* task content */}
              <div className='mt-4'>
                <label 
                htmlFor="task_content"
                className='block text-sm font-medium mb-2'
                >Content</label>
                <textarea
                type="text" 
                className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800' 
                id='task_content'
                rows={5}
                name='task_content'
                onChange={(event)=>{
                  setTask({
                    ...task,
                    content:event.target.value,

                  });
                }}
                value={task.content}
                />
              </div>


              {/* task status */}

              <div className="mt-4">
                <label 
                htmlFor="task_status"
                className='block text-sm font-medium mb-2'
                >Status
                </label>
                <select 
                id="task_status"
                className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800' 
                name='task_status'
                onChange={(event)=>{
                  setTask({
                    ...task,
                    status:event.target.value,

                  });
                }}
                value={task.status}
                
                >
                  <option value="none"  disabled>---Select Status---</option>
                  <option value="pending">pending</option>
                  <option value="completed">completed</option>

                </select>
              </div>

              {/* button actions */}
              <div className="mt-4 flex justify-center">
                <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Add Task</button>
                <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3' onClick={resetForm}>Clear</button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default AddTask;