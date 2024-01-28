import React from 'react'

type Props = {}

export default function HeadDetails({}: Props) {
  return (
    <>
      <li className=' flex flex-row w-full h-[7vh] bg-slate-200 items-center border-b-2 border-slate-300 '>
        <h3 className='flex w-full justify-center text-2xl font-normal tracking-tighter leading-tight text-slate-800'>Lot Id.</h3>
        <h3 className='flex w-full justify-center text-2xl font-normal tracking-tighter leading-tight text-slate-800'>Time stamp</h3>
      </li> 
    </>
  )
}