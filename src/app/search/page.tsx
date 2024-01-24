'use client'

import React, { useState } from 'react'

import { lotDetails } from '../Components/interface/lotDetail'

import SearchBar from '../Components/Search/SearchBar/searchBar'
import Maincontainer from '../Components/Search/SearchContainer/maincontainer'
import ExportBtn from '../Components/Search/SearchBar/exportBtn'

type Props = {}

export default function Search({}: Props) {
  const [data, onSetData] = useState([]) ; 
  const dataFromServer: lotDetails[] = [
    {
      Machine_ID: "1",
      Direction: "Up",
      Timestamp: "2024-01-22T12:00:00",
      Substrate: "Substrate Name 1",
      TTL: "Some TTL",
      badmark: "Bad Mark",
      ASSY_input: "Some ASSY Input",
      NG: 5,
      Good: "Good",
    },
    {
      Machine_ID: "2",
      Direction: "Down",
      Timestamp: "2024-01-22T13:30:00",
      Substrate: null,
      TTL: null,
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "3",
      Direction: "Up",
      Timestamp: "2024-01-22T14:45:00",
      Substrate: "Yet Another Substrate",
      TTL: null,
      badmark: "Yet Another Bad Mark",
      ASSY_input: "Yet Another ASSY Input",
      NG: 2,
      Good: "Good",
    },
    {
      Machine_ID: "4",
      Direction: "Down",
      Timestamp: "2024-01-22T16:15:00",
      Substrate: "One More Substrate",
      TTL: "Some TTL",
      badmark: null,
      ASSY_input: "One More ASSY Input",
      NG: 0,
      Good: "Good",
    },
    {
      Machine_ID: "5",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "6",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "7",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "8",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "9",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "10",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "11",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "12",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "13",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "14",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "15",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
    {
      Machine_ID: "16",
      Direction: "Up",
      Timestamp: "2024-01-22T17:30:00",
      Substrate: null,
      TTL: "Another TTL",
      badmark: "Another Bad Mark",
      ASSY_input: "Another ASSY Input",
      NG: null,
      Good: "Good",
    },
  ];
  
const onFetching = async()=>{
  //
}  
  return (
    <main className='h-full w-full flex flex-col'> 
      <header className='w-full flex flex-row justify-between items-center px-[2vw] bg-slate-600'>
        <SearchBar/>
        <ExportBtn/>
      </header>
      <section className='h-full flex flex-col'>
        <Maincontainer data={dataFromServer}/>
      </section>
    </main>
  )
}