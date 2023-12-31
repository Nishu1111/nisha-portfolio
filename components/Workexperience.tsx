"use client"
import React from 'react'
import { motion,AnimatePresence } from "framer-motion"
import Experiencecard from './Experiencecard.tsx'
type Props = {}

export default function Workexperience({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1 }}
    className='h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row max-w-full px-5 md:px-10 lg:px-20 2xl:px-28 justify-evenly mx-auto items-center'>

    <h3 className='absolute top-0 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl'>
        Experience
    </h3>
    
    <div className='w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 overflow-x-auto p-5 md:p-10 scrollbar-none scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <Experiencecard />
        <Experiencecard />
        <Experiencecard />
        <Experiencecard />
    </div>
</motion.div>

  )
}