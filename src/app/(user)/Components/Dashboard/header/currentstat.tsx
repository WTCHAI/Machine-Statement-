import React from 'react'

type Props = {}

export default function Currentstat({}: Props) {
  return (
    <div className='flex flex-col w-2/12'>
        <h1 className='text-xl text-gray-500 font-normal tracking-tighter leading-tight '>สถานะปัจจุบัน</h1>
        <p className='text-sm pl-[1vw]'>
          lasted updated 
        </p>
    </div>
  )
}