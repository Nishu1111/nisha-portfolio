"use client"
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name:string;
    email:string;
    subject:string;
    message:string;
  }
  type Props = {}
export default function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:nishunicks1113@gmail?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`;
      };
  return (
    <div className='h-screen flex-col md:text-left md:flex-row max-w-7xl px-5 md:px-10 relative items-center flex text-center md:justify-evenly mx-auto'>
    <h3 className='absolute text-4xl text-gray-500 tracking-[20px] top-1 uppercase'>Contact</h3>
    <div className='flex mt-10 flex-col space-y-10'>
      <h4 className='text-2xl md:text-4xl font-semibold text-center md:text-left'>
        i have got just what you need.[""]
        <span className='underline decoration-[#F7AB0A]/50'>
          Let's Talk
        </span>
      </h4>
      <div className='space-y-10'>
        <div className='flex items-center space-x-5 justify-center'>
          <PhoneIcon className='text-[#F7AB0A] w-7 h-7 animate-pulse' />
          <p className='text-xl md:text-2xl'>+91 1122334455</p>
        </div>
        <div className='flex items-center justify-center space-x-5'>
          <EnvelopeIcon className='w-7 h-7 text-[#F7AB0A] animate-pulse' />
          <p className='text-xl md:text-2xl'>nishunicks113@gmail.com</p>
        </div>
        <div className='flex items-center justify-center space-x-5'>
          <MapPinIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse' />
          <p className='text-xl md:text-2xl'>123 India</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
        <div className='flex flex-col space-y-2 md:flex-row md:space-x-2'>
          <input
            {...register('name')}
            placeholder='Name'
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder='Email'
            className="contactInput"
            type="email"
          />
        </div>
        <input
          {...register('subject')}
          placeholder='Subject'
          className="contactInput"
          type="text"
        />
        <textarea
          {...register('message')}
          placeholder='Message'
          className="contactInput"
        />
        <button
          type='submit'
          className='px-6 md:px-10 py-3 md:py-5 bg-[#F7AB0A] text-black font-bold text-lg md:text-xl rounded-md'
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  
  )
}