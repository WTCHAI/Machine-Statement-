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
            <div>
                {!isLoading && data.length !== 0 && data.map(e=>{
                    return (
                        <Link
                            href="search/[targetId]" as={`/search/${e.LotId}`}
                            key={e.LotId}
                            onClick={()=>{
                                onFetchingLotDetails(e.LotId)
                            }}
                        >
                            <li className='h-[9vh] min-h-[9vh] w-full ' key={e.LotId}>
                                <Lotdetails lotDetail={e} key={e.LotId}/> 
                            </li>                        
                        </Link>
                    )
                })}
                {!isLoading && data.length === 0 && <EmptyData/>}
                {isLoading && <p>loading ...... </p>}
            </div>
        </>

  )
}