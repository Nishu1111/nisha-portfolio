"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion,AnimatePresence } from "framer-motion"
//import Link from 'next/link'

export const MotionDiv = motion.div;
export default function Header() {
  return (
    <div className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>

    <motion.div 
    initial={{
      x: -500,
      opacity: 0,
      scale: 0.5
    }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1
    }}
    transition={{
      duration: 1.5,
    }}
    className='flex flex-row items-center'>
    {/*Social icons */}
<SocialIcon url="https://github.com/Nishu1111"fgColor='#a19b9a'bgColor='transparent' />
<SocialIcon url="https://mail.google.com/mail/u/2/#inbox?compose=DmwnWrRpfDQKwbbxhPnsnsNNlZhNqxnjbWKmLhfvvvFtVCqbkwCMhNkhHgMhvzVMpJcMHwJQhkxl"fgColor='#a19b9a'bgColor='transparent' />
<SocialIcon url="https://www.linkedin.com/in/nisha-dadoriya-359b62188/"fgColor='#a19b9a'bgColor='transparent' />
<SocialIcon url="https://www.instagram.com/d.nisha_11/"fgColor='#a19b9a'bgColor='transparent' />
</motion.div>

 <motion.div 
    initial={{
      x: 500,
      opacity: 0,
      scale: 0.5
    }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1
    }}
    transition={{
      duration: 1.5,
    }}
  className='flex flex-row items-center text-#a19b9a-300 cursor-pointer'>
  
    <SocialIcon className='cursor-pointer'
    network='email'
    fgColor='#a19b9a'
    bgColor='transparent'
    href='#contacts'
     />
     <p className='uppercase hidden md:inline-flex text-sm  text-gray-300'>Get in Touch</p>
    
 </motion.div>

    </div>
  )
}