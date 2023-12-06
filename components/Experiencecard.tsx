import React from 'react'
import { motion,AnimatePresence } from "framer-motion"

type Props = {}

export default function Experiencecard({}: Props) {
  return (
    <article className='mt-10 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity-duration-200 overflow-hidden'>
    <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="https://lh3.googleusercontent.com/3bXLbllNTRoiTCBdkybd1YzqVWWDRrRwJNkVRZ3mcf7rlydWfR13qJlCSxJRO8kPe304nw1jQ_B0niDo56gPgoGx6x_ZOjtVOK6UGIr3kshpmTq46pvFObfJ2K0wzoqk36MWWSnh0y9PzgE7PVSRz6Y"
        alt="" />
    <div className='px-0 md:px-5 lg:px-10'>
        <h4 className='text-xl md:text-4xl font-light'>Full stack intern</h4>
        <p className='font-bold text-lg md:text-2xl mt-1'>Internship</p>
        <div className='flex space-x-2 my-2'>
            <img className='h-8 w-8 md:h-10 md:w-10 rounded-full' 
                src='https://lh3.googleusercontent.com/3bXLbllNTRoiTCBdkybd1YzqVWWDRrRwJNkVRZ3mcf7rlydWfR13qJlCSxJRO8kPe304nw1jQ_B0niDo56gPgoGx6x_ZOjtVOK6UGIr3kshpmTq46pvFObfJ2K0wzoqk36MWWSnh0y9PzgE7PVSRz6Y'
                alt='' />
            <img className='h-8 w-8 md:h-10 md:w-10 rounded-full' 
                src='https://lh3.googleusercontent.com/3bXLbllNTRoiTCBdkybd1YzqVWWDRrRwJNkVRZ3mcf7rlydWfR13qJlCSxJRO8kPe304nw1jQ_B0niDo56gPgoGx6x_ZOjtVOK6UGIr3kshpmTq46pvFObfJ2K0wzoqk36MWWSnh0y9PzgE7PVSRz6Y'
                alt='' />
            <img className='h-8 w-8 md:h-10 md:w-10 rounded-full' 
                src='https://lh3.googleusercontent.com/3bXLbllNTRoiTCBdkybd1YzqVWWDRrRwJNkVRZ3mcf7rlydWfR13qJlCSxJRO8kPe304nw1jQ_B0niDo56gPgoGx6x_ZOjtVOK6UGIr3kshpmTq46pvFObfJ2K0wzoqk36MWWSnh0y9PzgE7PVSRz6Y'
                alt='' />
        </div>
        <p className='uppercase py-1 text-gray-300'>started work... - Ended...</p>
        <ul className='list-disc space-y-2 ml-2 text-xs md:text-lg'>
            <li>detail1 detail1 detail1 detail1 detail1</li>
            <li>detail1 detail1 detail1 detail1 detail1</li>
            <li>detail1 detail1 detail1 detail1 detail1</li>
        </ul>
    </div>
</article>

      
    
  )
}