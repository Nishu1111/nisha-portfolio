"use client"
import React from 'react'
import Skill from './Skill.tsx'
import { motion,AnimatePresence } from "framer-motion"

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-screen-xl xl:px-5 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className='absolute top-5 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl'>
        Skills
    </h3>
    <h3 className='absolute top-14 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>
        Hover over a skill for currency proficiency 
    </h3>
    <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
    </div>
</motion.div>

  )
}