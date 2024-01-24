import React from 'react'

import { TiExport } from "react-icons/ti";


type Props = {}

export default function ExportBtn({}: Props) {
  return (
    <div className='flex h-full items-center'>
        <button
            className='bg-emerald-400 py-[0.75vh] px-[1.5vh] text-slate-600 text-xl rounded-lg hover:bg-emerald-500 '
        >
            <TiExport/>
        </button>        
    </div>

  )
}