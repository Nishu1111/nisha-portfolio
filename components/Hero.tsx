"use client"
import { Span } from 'next/dist/trace';
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from "../components/BackgroundCircles.tsx"
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi,The Name's Nisha ",
            "Who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='min-h-screen flex flex-col space-y-5 items-center justify-center text-center overflow-hidden'>
    <BackgroundCircles />
    <img className="relative rounded-full h-20 w-20 mx-auto object-cover sm:w-28 sm:h-28 md:w-38 md:h-38 lg:w-58 lg:h-58" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR57OxvdEDGI-D3c8_5PsnKNyyk7PFezcDRQ&usqp=CAU" alt="" 
    />
    <div className="z-20">
        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg uppercase text-gray-500 pb-2 tracking-[15px]">developer</h2>
        <h1 className='text-sm sm:text-xl lg:text-3xl font-semibold px-5 sm:px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
            <Link href="#about">
                <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
                <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
                <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
                <button className="heroButton">Projects</button>
            </Link>
        </div>
    </div>
</div>

  )
}