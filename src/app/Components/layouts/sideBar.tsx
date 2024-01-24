import React from 'react'
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import NavigationMenu from '../navMenu/sideBar';

type Props = {}

export default function SideBar({}: Props) {
  //adding on hover appear collapse button
  return (
    <section className='flex flex-col max-w-[20vw] min-w-fit bg-slate-50 w-full h-full border-r-2 border-r-gray-200'>
      <header className='flex flex-row items-center justify-between my-[2vh] mx-[1vw]   gap-x-[1vw]   font-light text-slate-700'>
        <h1 className='text-2xl font-normal tracking-tighter leading-tight hover:bg-gray-200 hover:shadow-sm rounded-md px-[1vw] cursor-default'>
          Machine statement
        </h1>
        <TbLayoutSidebarLeftCollapse className='text-xl cursor-pointer'/>
      </header>
      <div className='flex flex-col h-full'>
        <NavigationMenu/>
      </div>
    </section>
  )
}