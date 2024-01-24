import React from 'react'

import Link from 'next/link';

import { IoStatsChartSharp } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { TbSettings } from "react-icons/tb";

type Props = {}

export default function NavigationMenu({}: Props) {
  // solve on active hold value color 
  return (
    <ul className='flex flex-col h-full w-full gap-y-[2vh] mt-[2vh] text-slate-700'>
      <Link href="dashboard">
        <li className='flex items-center mx-[2vw] py-[2vh] px-[2vw] gap-x-[2vw] rounded-xl hover:bg-gray-200 active:bg-slate-200 cursor-pointer'>
          <IoStatsChartSharp className="text-2xl font-extralight"/>
          <h1 className='text-xl tracking-tight leading-tight'>Dashboard</h1>
        </li>      
      </Link>
      <Link href="search">
        <li className='flex items-center mx-[2vw] py-[2vh] px-[2vw] gap-x-[2vw] rounded-xl hover:bg-gray-200 active:bg-slate-200  cursor-pointer'>
          <MdHistory className="text-2xl"/>
          <h1 className='text-xl tracking-tight leading-tight'>Search</h1>
        </li>      
      </Link>

      <Link href="setting">
        <li className='flex items-center mx-[2vw] py-[2vh] px-[2vw] gap-x-[2vw] rounded-xl hover:bg-gray-200 active:bg-slate-200  cursor-pointer'>
          <TbSettings className="text-2xl "/>
          <h1 className='text-xl tracking-tight leading-tight'>Settings</h1>
        </li>
      </Link>

    </ul>
  )
}