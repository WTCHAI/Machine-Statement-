"use client"

import React, { useState } from 'react'

import { lotDetails } from '../../interface/lotDetail'

import Lotdetails from './lotdetails'
import EmptyData from './EmptyData'
import SearchFooter from './SearchFooter'
import HeadDetails from './HeadDetails'

type Props ={
    data : lotDetails[]
}

export default function Maincontainer({ data }: Props) {

    const [currentPage , setCurrentPage] = useState(1) ;

    const totalPage = Math.ceil(data.length / 7) ;
    const startIndex = (currentPage-1) * 7 ; 

    const currentData : lotDetails[] = startIndex == totalPage
    ? data.slice(startIndex,data.length-1)
    : data.slice(startIndex , startIndex+7) 

    const pageStatus ={
        currentPage: currentPage,
        maxPage: totalPage
    };

    const onPageChangeHandler : any = (type : string)=>{
        if (type === "Increase"){
            if (currentPage != totalPage){
                setCurrentPage(prev=>prev+1)
            }
        }else if (type === "Decrease"){
            if (currentPage !== 1 ){
                setCurrentPage(prev=>prev-1)
            }
        }
    }


  return (
    <>
        <main className='w-full'>
            <HeadDetails/>
            <ul className='flex flex-col h-[76vh] w-full bg-slate-100 '>
                {currentData.length !== 0 && currentData.map(e=>{
                    return <li className='h-[11vh] min-h-[11vh] w-full'>
                        <Lotdetails lotDetail={e}/> 
                    </li>
                })}
                {data.length === 0 && <EmptyData/>}
            </ul>
        </main>  
        <SearchFooter onPageChangeHandler={onPageChangeHandler} pageStatus={pageStatus}/>  
    </>
  )
}