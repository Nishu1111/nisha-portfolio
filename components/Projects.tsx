"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { GSP_NO_RETURNED_VALUE } from 'next/dist/lib/constants'
type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
 <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.5}}
     className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row mx-w-full justify-evenly mx-auto items-center z-0'>
    <h3 className='absolute top-1 uppercase tracking-[20px] text-gray-500 text-2xl'>
    Projects
    </h3>
    <motion.div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar
      scrollbar-track-y-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
        {projects.map((project, i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-34 h-screen'>

                 <motion.img 
                 initial={{y:-300,opacity:0}} 
                 transition={{duration:1.2}}
                 whileInView={{opacity:1,y:0}}
                 viewport={{once:true}}
                 src="https://i.pinimg.com/736x/1a/ae/e7/1aaee7fbd5aa206266ab1a70756030fc.jpg" alt="" height={250}
            width={250} />
                 <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center '>
                <span className='underline decoration-[#F7AB0A]'>
                  Case Study {i + 1} of {projects.length}:
                </span>
                 UI layout 
              </h4>
              <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eius. Pariatur mollitia placeat illum cumque sequi facilis, excepturi doloremque nesciunt laborum earum id, minus tempore error debitis ratione blanditiis aperiam!Lorem
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque at. Magnam optio quae officiis eligendi odit laudantium, beatae doloremque.
              </p>
                 </div>
            </div>
        ))}
    </motion.div>
        {/* projects */}
        {/* projects */}
        {/* projects */}
        {/* projects */}
{/* projects */}
    
          
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 -skew-y-12 left-0 h-[500px]'></div>

 </motion.div>
  )
}