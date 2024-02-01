'use client'
import Link from 'next/link';
import React from 'react'
import { useParams } from 'next/navigation';

import { lotDetails } from '../../interface/lotDetail'
import { lotSubDetails } from '../../interface/lotSubDetails';

import Lotdetails from './lotdetails';
import EmptyData from './EmptyData';

type Props = {
    data : DataType ,
    isLoading : boolean,
    onFetchingLotDetails : (targetKey : any)=> void
}

type DataType = lotDetails[] | lotSubDetails[]

export default function SearchResultlist({data , isLoading , onFetchingLotDetails}: Props) {
    //check u path in url 
    const pathName = useParams()

    return (
        <>
            {!isLoading && data.length !== 0 && data.map((e : lotDetails | lotSubDetails)=>{
                    return (
                        <>
                            {!pathName.id &&
                            <Link
                                href="search/[targetId]" as={`/search/${e.LotId}`}
                                // href=""
                                key={e.LotId}
                                onClick={()=>{
                                    onFetchingLotDetails(e.LotId)
                                }}
                            >
                                <li className='h-[7.5vh] min-h-[7.5vh] w-full rounded-xl bg-white hover:bg-sky-50  ' key={e.LotId}>
                                    <Lotdetails lotDetail={e}/> 
                                </li>                        
                            </Link>
                            }
                            {pathName.id && 
                                <li className='h-[7.5vh] min-h-[7.5vh] w-full rounded-xl bg-white hover:bg-gray-50 ' key={e.LotId}>
                                    <Lotdetails lotDetail={e} /> 
                                </li>  
                            }                   
                        </>

                    )
                })}
                {!isLoading && data.length === 0 && <EmptyData/>}
                {isLoading && <p>loading ...... </p>}
        </>

  )
}