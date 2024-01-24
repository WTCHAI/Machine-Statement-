
import React from 'react'

import { FaSearch } from "react-icons/fa";
import Calendar from './calendar';

type Props = {}

export default function SearchBar({}: Props) {
  return (
    <div className='text-slate-800 w-[40vw]'>
      <div className='flex flex-row h-full w-full bg-white bg-opacity-90  items-center justify-start px-[2vw] my-[1vh] outline-slate-100 rounded-2xl gap-x-[2vw] shadow-sm cursor-pointer outline-1'>
        <FaSearch className="text-lg font-thin" />
        <input
          type='text'
          placeholder='Search...'
          className='outline-0 bg-transparent text-lg w-full cursor-pointer py-[0.5vh]'
          // onInput={}
          />  
        <Calendar/>
      </div>
    </div>
  )
}