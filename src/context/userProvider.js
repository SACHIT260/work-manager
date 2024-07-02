"use client"


import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { httpAxios } from '@/helper/httphelper'
import { currentUser } from '@/services/userService'
import { toast } from 'react-toastify'

const userProvider = ({children}) => {

    useEffect(() => {
        async function load() {
          try {
            const tempUser = await currentUser();
            console.log(tempUser);
            setUser({ ...tempUser });
          } catch (error) {
            console.log(error);
            // toast.error("error in loading current  user");
            setUser(undefined);
          }
        }
        if(!user)
        load();
      }, []);


    const [user,setUser]=useState(undefined);
  return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}

export default userProvider