"use client"
import React from 'react'

import { motion,AnimatePresence } from "framer-motion"
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR57OxvdEDGI-D3c8_5PsnKNyyk7PFezcDRQ&usqp=CAU
type Props = {}

export default function About({}: Props) {
  return (

    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 lg:px-20 2xl:px-28 justify-evenly mx-auto items-center">
    <h3 className='absolute top-10 md:top-4 uppercase tracking-[0px] text-gray-500 text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
        About
    </h3>
        
    <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR57OxvdEDGI-D3c8_5PsnKNyyk7PFezcDRQ&usqp=CAU"
        className='-mb-8 md:-mb-20 flex-shrink-0 w-36 md:w-48 lg:w-56 h-36 md:h-48 lg:h-80 xl:w-[450px] xl:h-[550px] rounded-full object-cover md-rounded-lg'
    />
    <div className='space-y-5 md:space-y-10 px-2 md:px-5 lg:px-10 xl:px-20'>
        <h4 className='text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold'>
            Here is a{" "}
            <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} 
            background
        </h4>
        <p className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
            B.Tech graduate with a flair for crafting responsive web wonders and decoding the JavaScript enchantments of algorithms and data structures. Steered through the dynamic realm of full-stack magic during a transformative 6-month internship at Jain Software, where PHP was my trusted wand. The journey unfolded through successful projects that now adorn my portfolio with tales of code conquests.
            Currently unraveling the mysteries of Computer Science and Engineering in pursuit of a Master's degree, adding new layers to my tech tapestry. Python is my secret language for weaving intricate data analytics spells.
            About harnessing the power of technology to tackle real-world conundrums, I'm on the lookout for opportunities to shape the future in web development, data analytics, and beyond. A coding artisan with a zest for learning, networking, and contributing to the open-source galaxy.
        </p>
    </div>
</motion.div>


  )
}