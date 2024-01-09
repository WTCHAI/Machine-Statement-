import React from 'react'
import { GrVirtualMachine } from "react-icons/gr";


type Props = {}

export default function SideBar({}: Props) {
  return (
    <section className='max-w-[30vw] bg-slate-100 pl-[2vw]  flex flex-col w-full'>
      <div className='py-[2vh] flex flex-row items-center'>
        <GrVirtualMachine/>
        <h1 className='text-2xl pl-[1.5vw] font-light tracking-tight leading-tight '>
          Machine statement
        </h1>
      </div>      
      <div>

      </div>
    </section>
  )
}