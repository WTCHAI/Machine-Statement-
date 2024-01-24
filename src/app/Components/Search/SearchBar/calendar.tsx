import React from 'react'

import { FaCalendarAlt } from "react-icons/fa";


type Props = {}

export default function Calendar({}: Props) {
  return (
    <div className='text-slate-800 text-lg'>
        <FaCalendarAlt/>
    </div>

  )
}