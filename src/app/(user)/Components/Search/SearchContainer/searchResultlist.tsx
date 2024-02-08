'use client'
import Link from 'next/link';
import React from 'react'
import { useParams } from 'next/navigation';

import { lotDetails } from '../../navMenu/interface/lotDetail'
import { lotSubDetails } from '../../navMenu/interface/lotSubDetails';

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
                                <li className='h-[7.5vh] min-h-[7.5vh] w-full rounded-xl bg-gray-100 hover:bg-gray-200 hover:border-2 border-solid hover:border-gray-200' key={e.LotId}>
                                    <Lotdetails lotDetail={e} isLoading={isLoading}/> 
                                </li>                        
                            </Link>
                            }
                            {pathName.id && 
                                <li className='h-[7.5vh] min-h-[7.5vh] w-full rounded-xl bg-gray-100 hover:bg-gray-200 hover:border-2 border-solid hover:border-gray-200' key={e.LotId}>
                                    <Lotdetails lotDetail={e} isLoading={isLoading}/> 
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