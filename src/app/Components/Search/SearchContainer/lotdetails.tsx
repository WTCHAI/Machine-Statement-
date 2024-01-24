import React from 'react'
import { lotDetails } from '../../interface/lotDetail'

type Props = {
  lotDetail : lotDetails
}

export default function Lotdetails({lotDetail}: Props) {
  
  return (
    <div className='flex flex-row justify-center w-full h-full bg-slate-100 items-center border-b-2'>
        <p className='flex w-full justify-center text-slate-800 text-lg'>{lotDetail.Machine_ID}</p>
        <p className='flex w-full justify-center text-slate-800 text-lg'>{lotDetail.Timestamp}</p>
    </div>
  )
}