import React from 'react'

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


type Props = {
    onPageChangeHandler: (type: string) => void;
    pageStatus: {
        startIndex : number ,
        currentPage : number , 
        totalPage : number , 
    };
}

export default function SearchFooter({onPageChangeHandler,pageStatus}: Props) {
    const onIncrement = ()=>{
        onPageChangeHandler("Increase") ; 
    }
    const onDecrement = ()=>{
        onPageChangeHandler("Decrease") ; 
    }

  return (
    <section className='flex flex-row w-full h-full items-center bg-transparent' >
        <span className='flex flex-row w-full justify-start pl-[5vw] text-lg tracking-tight leading-tight font-medium'>
            <h1 className='text-slate-600'>
                Page {pageStatus.currentPage} of {pageStatus.totalPage === 0 ? 1 : pageStatus.totalPage  }
            </h1>
            
        </span>
        <span className='flex flex-row w-full justify-end pr-[5vw] gap-x-[3vw]'>
            <button
                onClick={onDecrement}
                className={`${
                    pageStatus.currentPage === 1
                    ? 'bg-slate-500'
                    : 'bg-slate-600 active:scale-105 hover:bg-opacity-80'
                  } px-[2vw] py-[1vh] rounded-lg  text-white transition-all`} 
                                 >
                <GrPrevious/>
            </button>
            <button
                onClick={onIncrement}
                className={`${
                    pageStatus.currentPage === pageStatus.totalPage
                      ? 'bg-slate-500'
                      : 'bg-slate-600 active:scale-105 hover:bg-opacity-80'
                  } px-[2vw] py-[1vh] rounded-lg text-white`}                
                disabled={pageStatus.currentPage===pageStatus.totalPage}
            >
                
                <GrNext/>
            </button>
        </span>
    </section>
  )
}