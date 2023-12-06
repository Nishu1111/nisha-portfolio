"use client"
import React from 'react'
import { motion,AnimatePresence } from "framer-motion"
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      scale: [1, 2, 2, 3, 1],
      opacity: [0.1, 0.2, 0.4, 0.4, 0.2, 0.1],
      borderRadius: ["204", "204", "504", "804", "204"]
    }}
    transition={{
      duration: 2.5,
    }}
     className='relative flex justify-center items-center'>
        <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-22 animate-ping" />
        <div className="rounded-full border border-[#242222] h-[300px] w-[300px] absolute mt-22" />
        <div className="rounded-full border border-[#242222] h-[350px] w-[350px] absolute mt-22" />
        <div className="rounded-full border border-[#F7AB0A]/40 opacity-10 h-[320px] w-[320px] absolute mt-22 animate-pulse md:h-200px w-200px sm:h-100px w-100px" />
        <div className="rounded-full border border-[#242222] h-[400px] w-[400px] absolute mt-22" />
    </motion.div>
  )
}