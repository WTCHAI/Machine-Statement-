"use client"
import React, { useEffect, useState } from 'react'

import Link from 'next/link';

import { IoStatsChartSharp } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { TbSettings } from "react-icons/tb";

type Props = {}

export default function NavigationMenu({}: Props) {
  // solve on active hold value color 
  const [activeState, setActiveState] = useState({
    dashboard: false,
    search: false,
    setting: false,
  });



  const onClickHandler = (type: string) => {
    setActiveState((prev) => {
      const updatedState: any = {};
      // Set the clicked item to active
      updatedState[type] = true;
      // Set all other items to inactive
      for (const key in prev) {
        if (key !== type) {
          updatedState[key] = false;
        }
      }
      sessionStorage.setItem('SideBarStatus',JSON.stringify(updatedState) )
      return updatedState;
    })
  }

  useEffect(()=>{
    const initialState = sessionStorage.getItem('SideBarStatus')
    if(initialState){
      setActiveState(JSON.parse(initialState))
    }
  },[])

  return (
    <ul className='flex flex-col h-full w-full gap-y-[2vh] mt-[2vh] text-slate-700'>
      <Link href="/dashboard">
        <li
          className={`flex items-center mx-[2vw] py-[2vh] px-[2vw] gap-x-[2vw] rounded-xl hover:bg-gray-100 hover:shadow-lg cursor-pointer ${activeState.dashboard ? ' bg-gray-200 opacity-85 shadow-md ': ''}`}
          onClick={()=>{
            onClickHandler('dashboard')
          }}  
        >
          <IoStatsChartSharp className="text-2xl font-extralight"/>
          <h1 className='text-xl tracking-tight leading-tight'>Dashboard</h1>
        </li>      
      </Link>
      <Link href="/search">
        <li
          className={`flex items-center mx-[2vw] py-[2vh] px-[2vw] gap-x-[2vw] rounded-xl hover:bg-gray-100 hover:shadow-lg cursor-pointer ${activeState.search ? ' bg-gray-200 opacity-85  shadow-md ': ''}`}
          onClick={()=>{
            onClickHandler('search')
          }}    
        >
          <MdHistory className="text-2xl"/>
          <h1 className='text-xl tracking-tight leading-tight'>Search</h1>
        </li>      
      </Link>

      <Link href="/setting">
        <li
          className={`flex items-center mx-[2vw] py-[2vh] px-[2vw] gap-x-[2vw] rounded-xl hover:bg-gray-100 hover:shadow-lg cursor-pointer ${activeState.setting ? ' bg-gray-200 opacity-85  shadow-md ': ''}`}
          onClick={()=>{
            onClickHandler('setting')
          }}  
        >
          <TbSettings className="text-2xl "/>
          <h1 className='text-xl tracking-tight leading-tight'>Settings</h1>
        </li>
      </Link>

    </ul>
  )
}