import React, { useEffect, useState } from 'react'

import { TbArrowBigDownLineFilled , TbArrowBigUpLineFilled} from "react-icons/tb";

import { lotDetails } from '../navMenu/interface/lotDetail'

type Props = {
    currentData : lotDetails[]
}

export default function CurrentLots({currentData}: Props) {
    const[transition ,onSetTransition] = useState(false)

  return (
    <section className='h-full w-full text-gray-500'>
        <ul className='flex flex-wrap gap-x-[1vw] gap-y-[1vh] justify-center items-center h-full'>
            {currentData.map((e : lotDetails)=>{
                return (
                    <li
                        key={e.LotId}
                        className='flex flex-col bg-gray-100 h-[22vh] w-[23vw] rounded-2xl shadow-sm hover:bg-gray-200  hover:border-2 border-solid border-gray-200 '
                    >
                        <span className='h-4/6'>
                            {   e.Direction === "Up" &&
                                <span className='flex flex-col text-green-400 h-full w-full justify-end hover:translate-y-[-3vh]  transition-transform duration-[1000ms]'>
                                    <TbArrowBigUpLineFilled className=" w-full h-4/5  "/>
                                </span>   
                            }
                            {   e.Direction === "Down" &&
                                <span className='flex flex-col text-red-500 h-full w-full justify-start hover:translate-y-[3vh] transition-all duration-[1000ms]'>
                                    <TbArrowBigDownLineFilled className="w-full h-4/5"/>
                                </span>   
                            }
                        </span>
                        <span className='h-2/6'> 
                        
                            <h2>
                                {e.stationName}
                            </h2>
                            <h3>
                                {e.LotId}
                            </h3>
                        </span>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}