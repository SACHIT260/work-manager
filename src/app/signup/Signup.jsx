
"use client";

import React, { useState } from 'react'
import signup from "../../assets/signup.svg"
import Image from 'next/image';
import { toast } from 'react-toastify';
import { signUp } from '@/services/userService';

const Signup = () => {

 


  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    about:"",
    profileURL:"https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg"
  })



  const doSignUp=async (e)=>{
    e.preventDefault();
    console.log(e);
    console.log(data);

    if(data.name.trim()==""|| data.name==null){
      toast.warning("Name is required!!",{
        position:"top-center",      
      })
      return;
    }

    //form submit

    try {
      const result=await signUp(data);
      console.log(result);
      toast.success("User is  registerd",{
        position:'top-center',
      });
      setData({
        name:"",
      email:"",
      password:"",
      about:"",
      profileURL:"https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg"
      })
    } catch (error) {
      console.log(error);
      toast.error("Sign up error "+ error.response.data.message,{
        position:'top-center',
      });
    }
  }

  const resetForm=(e)=>{
    e.preventDefault();
    setData({
      name:"",
      email:"",
      password:"",
      about:"",
      profileURL:"https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg"
    })
  }
  return (
    <div className="grid grid-cols-12">
        <div className='col-span-4 col-start-5 '>
            <div className='py-5' >
                <div className='flex justify-center m-5'>
                    <Image src={signup} alt="signup" style={{
                        width:"40%",
                    }}></Image>
                </div>
                <h1 className='text-3xl text-center'>Signup Here</h1>
                <form action="#!" className='mt-5' onSubmit={doSignUp}>
                    {/* name */}
                    <div className='mt-3'>
                        <label 
                        htmlFor="user_name"
                        className='block text-sm font-medium mb-2 ps-2'
                        >
                        Username
                        </label>
                        <input 
                        type="text" 
                        className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800'  
                        placeholder='Enter Here'
                        name="user_name"
                        onChange={(event)=>{
                          setData({
                            ...data,
                            name:event.target.value,
                          });
                        }}
                        value={data.name}
                        />
                    </div>

                        {/* email */}
                    <div className='mt-3'>
                        <label 
                        htmlFor="user_email"
                        className='block text-sm font-medium mb-2 ps-2'
                        >
                        Email
                        </label>
                        <input 
                        type="text" 
                        className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800'  
                        placeholder='Enter Here'
                        id="user_email"
                        name="user_email"
                        onChange={(event)=>{
                          setData({
                            ...data,
                            email:event.target.value,
                          });
                        }}
                        value={data.email}
                        />
                    </div>

                     {/* password */}
                     <div className='mt-3'>
                        <label 
                        htmlFor="user_password"
                        className='block text-sm font-medium mb-2 ps-2'
                        >
                        Password
                        </label>
                        <input 
                        type="password" 
                        className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800'  
                        placeholder='Enter Here'
                        id="user_password"
                        onChange={(event)=>{
                          setData({
                            ...data,
                            password:event.target.value,
                          });
                        }}
                        value={data.password}
                        />
                    </div>

                     {/* about */}
                     <div className='mt-3'>
                        <label 
                        htmlFor="user_about"
                        className='block text-sm font-medium mb-2 ps-2'
                        >
                        About
                        </label>
                        <textarea 
                        className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800'  
                        placeholder='Enter Here'
                        id="user_about"
                        rows={8}
                        name="user_about"
                        onChange={(event)=>{
                          setData({
                            ...data,
                            about:event.target.value,
                          });
                        }}
                        value={data.about}
                        ></textarea>
                    </div>

                    <div className="mt-3 text-center">
              <button
                type="submit"
               className="w-full sm:w-auto px-3 py-2 bg-green-600 rounded hover:bg-green-400 mb-2 sm:mb-0"
              >
                Signup
              </button>
              <button
                 onClick={resetForm}
                type="button"
                className="w-full sm:w-auto px-3 py-2 bg-orange-600 sm:ml-3 rounded hover:bg-orange-400"
              >
                Reset
              </button>
            </div>
            {/* {JSON.stringify(data)}; */}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup