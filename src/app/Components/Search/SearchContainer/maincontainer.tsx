"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


import { lotDetails } from '../../interface/lotDetail'
import { lotSubDetails } from '../../interface/lotSubDetails'

import HeadDetails from './HeadDetails'
import SearchHeader from '../SearchBar/SearchHeader'
import SearchResultlist from './searchResultlist'
import SearchFooter from './SearchFooter'

type Props ={
}

type DataType = lotDetails[] | lotSubDetails[]

export default function Maincontainer({}: Props) {
  const router = useRouter()
  // check url
  const pathName = useParams()

    const [data,onSetData] = useState<DataType>([]) 
    const [calendar,onSetcalendar] = useState<any>(null) 
    const [isLoading , setLoading] = useState<boolean>(true) 
  
    //page check status handler ---------------------
    const [currentPage , setCurrentPage] = useState(1) 
    const totalPage = Math.ceil(data.length / 9) 
    const startIndex = (currentPage-1) * 9 
    const currentData : DataType = startIndex == totalPage
    ? data.slice(startIndex,data.length-1)
    : data.slice(startIndex , startIndex+9) 
    const pageStatus = {
        currentPage: currentPage,
        maxPage: totalPage
    }

    const onPageChangeHandler : any = (type : string)=>{
        if (type === "Increase"){
            if (currentPage < totalPage){
                setCurrentPage(prev=>prev+1)
            }
        }else if (type === "Decrease"){
            if (currentPage > 0 && currentPage !== 1  ){
                setCurrentPage(prev=>prev-1)
            }
        }
    }
    // ----------------------------------

    //fetcing process for search handler with lot 
  const onFetchingLots = async( targetKey : any )=>{
    setLoading(true)
    // const dataFromServer: lotDetails[] = [
    //     {
    //       Machine_ID: "1",
    //       Direction: "Up",
    //       Timestamp: "2024-01-22T12:00:00",
    //       Substrate: "Substrate Name 1",
    //       TTL: "Some TTL",
    //       badmark: "Bad Mark",
    //       ASSY_input: "Some ASSY Input",
    //       NG: 5,
    //       Good: "Good",
    //     },
    //     {
    //       Machine_ID: "2",
    //       Direction: "Down",
    //       Timestamp: "2024-01-22T13:30:00",
    //       Substrate: null,
    //       TTL: null,
    //       badmark: "Another Bad Mark",
    //       ASSY_input: "Another ASSY Input",
    //       NG: null,
    //       Good: "Good",
    //     },
    //     {
    //       Machine_ID: "3",
    //       Direction: "Up",
    //       Timestamp: "2024-01-22T14:45:00",
    //       Substrate: "Yet Another Substrate",
    //       TTL: null,
    //       badmark: "Yet Another Bad Mark",
    //       ASSY_input: "Yet Another ASSY Input",
    //       NG: 2,
    //       Good: "Good",
    //     },
    //     {
    //       Machine_ID: "4",
    //       Direction: "Down",
    //       Timestamp: "2024-01-22T16:15:00",
    //       Substrate: "One More Substrate",
    //       TTL: "Some TTL",
    //       badmark: null,
    //       ASSY_input: "One More ASSY Input",
    //       NG: 0,
    //       Good: "Good",
    //     },
    //     {
    //       Machine_ID: "5",
    //       Direction: "Up",
    //       Timestamp: "2024-01-22T17:30:00",
    //       Substrate: null,
    //       TTL: "Another TTL",
    //       badmark: "Another Bad Mark",
    //       ASSY_input: "Another ASSY Input",
    //       NG: null,
    //       Good: "Good",
    //     },
    //     {
    //       Machine_ID: "6",
    //       Direction: "Up",
    //       Timestamp: "2024-01-22T17:30:00",
    //       Substrate: null,
    //       TTL: "Another TTL",
    //       badmark: "Another Bad Mark",
    //       ASSY_input: "Another ASSY Input",
    //       NG: null,
    //       Good: "Good",
    //     },
    //     {
    //       Machine_ID: "7",
    //       Direction: "Up",
    //       Timestamp: "2024-01-22T17:30:00",
    //       Substrate: null,
    //       TTL: "Another TTL",
    //       badmark: "Another Bad Mark",
    //       ASSY_input: "Another ASSY Input",
    //       NG: null,
    //       Good: "Good",
    //     },

    // ];
    const dataFromServer: lotSubDetails[] = [
      {
        LotId : "1",
        Timestamp: "2024-01-22T12:00:00",
      },
      {
        LotId: "2",
        Timestamp: "2024-01-22T13:30:00",
      },
      {
        LotId: "3",
        Timestamp: "2024-01-22T14:45:00",
      },
      {
        LotId: "4",
        Timestamp: "2024-01-22T16:15:00",
      },
      {
        LotId: "5",
        Timestamp: "2024-01-22T17:30:00",
      },
      {
        LotId: "6",
        Timestamp: "2024-01-22T17:30:00",
      },
      {
        LotId: "7",
        Timestamp: "2024-01-22T17:30:00",
      },
      {
        LotId: "8",
        Timestamp: "2024-01-22T17:30:00",
      },      {
        LotId: "9",
        Timestamp: "2024-01-22T17:30:00",
      },      {
        LotId: "10",
        Timestamp: "2024-01-22T17:30:00",
      },      {
        LotId: "11",
        Timestamp: "2024-01-22T17:30:00",
      },      {
        LotId: "12",
        Timestamp: "2024-01-22T17:30:00",
      }
    ];
    // get data from server and set state of data get fetch submit from search and sent data to main container
    // const dataFromServer : lotDetails[] = []
    if (calendar){
      console.log("on Fetcing executed : ",targetKey,calendar)
    }
    else {
      console.log("on Fetcing executed : ",targetKey)
    }
      //after getting it store it to sesionstorage 
    sessionStorage.setItem('currentLots',JSON.stringify(dataFromServer))
    setTimeout(() => {
        // After the delay, set the data and setLoading to false
      onSetData(dataFromServer);
      setLoading(false);
    }, 3000);
    router.push('/search')
  }  
  // after get lot target fetch list of lot details
  const onFetchingLotDetails = async(targetKey : any)=>{
    //
    setLoading(true)
  }

  //calendar filter 
  const onFiterDate  = (targetDate:any)=>{
    onSetcalendar(targetDate)
  }

  // get initial data
  useEffect(()=>{
    setLoading(true)
    const currentStorage = sessionStorage.getItem('currentLots')
    if (currentStorage){
      setTimeout(() => {
        const tempData = JSON.parse(currentStorage)
        if (pathName.id){
          //case if have pathname wanna know inside data 
          const currentData = tempData.filter((e : lotDetails)=>e.LotId === pathName.id)
          onSetData(currentData)           
        }else{
          //wanna know just lot id and date details
          const currentData = tempData.map((e : lotDetails)=>{
            return e
          })
          onSetData(currentData)          
        }
      setLoading(false)       
      },1000)
    }else{
      setLoading(false)
    }
  },[])    
  return (
    <>
      <SearchHeader onFetcing={onFetchingLots} onFilterDate={onFiterDate}/>
        <main className='w-full'>
          <HeadDetails/>
          <ul className='flex flex-col h-[80vh] w-full bg-slate-100 '>
              <SearchResultlist data={currentData} isLoading={isLoading} onFetchingLotDetails={onFetchingLotDetails}/>
          </ul> 
        </main>
      <SearchFooter onPageChangeHandler={onPageChangeHandler} pageStatus={pageStatus}/>  
    </>
  )
}