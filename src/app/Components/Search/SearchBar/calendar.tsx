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
  <div className='flex h-full items-center'>
    <button className='bg-emerald-400 py-[0.75vh] px-[1.5vh] text-slate-600 text-xl rounded-lg hover:bg-emerald-300 hover:text-slate-500 cursor-pointer'>
        <FaCalendarAlt/>
    </button>      
  </div>


  )
}