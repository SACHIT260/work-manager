



"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-blue-600 text-white mt-1'>
      <div className='container mx-auto py-10 px-5'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/3 text-center md:text-left mb-3 md:mb-0'>
            <h1 className='text-3xl font-bold mb-2'>Welcome to the Work Manager</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className='w-full md:w-1/3 text-center mb-6 md:mb-0'>
            <h1 className='text-xl font-bold mb-2'>Important Links</h1>
            <ul>
              <li><a href="#!" className='hover:underline'>Facebook</a></li>
              <li><a href="#!" className='hover:underline'>Youtube</a></li>
              <li><a href="#!" className='hover:underline'>Instagram</a></li>
            </ul>
          </div>
          <div className='w-full md:w-1/3 text-center md:text-right'>
            <h1 className='text-xl font-bold mb-2'>Contact Us</h1>
            <p className='text-lg'>123 Work Manager Street</p>
            <p className='text-lg'>Bhubaneswar, Odisha, 674521</p>
            <p className='text-lg'>Email: info@workmanager.com</p>
            <p className='text-lg'>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className='border-t border-gray-300 mt-6 pt-4'>
          <p className='text-center text-sm'>© 2024 Work Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
