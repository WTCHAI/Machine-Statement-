import React from 'react'

import { FaCalendarAlt } from "react-icons/fa";


type Props = {
  onFilterDate : (targetDate : any)=> void

}

export default function Calendar({onFilterDate}: Props) {
  const onDateConfigHandler = ()=>{
    onFilterDate('someDate since ... to ...')
  }
  return (
  <div className='flex h-full items-center w-full'>
    <button className='flex justify-center bg-blue-500 py-[0.75vh] px-[1.5vh] text-gray-200 text-xl rounded-lg hover:bg-blue-400 hover:text-gray-100 cursor-pointer w-full'>
        <FaCalendarAlt/>
    </button>      
  </div>


  )
}