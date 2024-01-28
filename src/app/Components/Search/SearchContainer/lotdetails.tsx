import React from 'react'

import { lotDetails } from '../../interface/lotDetail'
import { lotSubDetails } from '../../interface/lotSubDetails'

type Props = {
  lotDetail : lotDetails | lotSubDetails
}

export default function Lotdetails({lotDetail}: Props) {
  return (
    <div className='flex flex-row justify-center w-full h-full bg-slate-100 items-center border-b-2 hover:bg-slate-50'>
        <p className='flex w-full justify-center text-slate-800 text-lg'>{lotDetail.LotId}</p>
        <p className='flex w-full justify-center text-slate-800 text-lg'>{lotDetail.Timestamp}</p>
    </div>
  )
}