'use client'

import React, { useEffect, useState } from 'react'

import { lotDetails } from '../navMenu/interface/lotDetail'
import Header from './header/header'
import Footer from './footer'
import CurrentLots from './currentLots'
import SearchHeader from '../Search/SearchBar/SearchHeader'

type Props = {

}

export default function MainContainer({}: Props) {
    const [currentData,onSetData] = useState<lotDetails[]>([])

    const onFetchLasted = async ()=>{

      const dataFromServer: lotDetails[] = [
        {
            LotId: "TYLOTSER1",
            stationName: "PKB",
            Direction: "Up",
            Timestamp: "2024-01-22T12:00:00",
            Substrate: 15,
            TTL: 50,
            badmark: 24,
            ASSY_input: 12,
            NG: 5,
            Good: 46,
        },
        {
            LotId: "TYLOTSER2",
            stationName: "qwe",
            Direction: "Up",
            Timestamp: "2024-01-22T12:00:00",
            Substrate: 12,
            TTL: 42,
            badmark: 18,
            ASSY_input: 23,
            NG: 4,
            Good: 38,
        },
        {
            LotId: "TYLOTSER3",
            stationName: "rty",
            Direction: "Down",
            Timestamp: "2024-01-22T12:00:00",
            Substrate: 10,
            TTL: 55,
            badmark: 32,
            ASSY_input: 18,
            NG: 7,
            Good: 51,
        },
        {
            LotId: "TYLOTSER4",
            stationName: "tyu",
            Direction: "Up",
            Timestamp: "2024-01-22T12:00:00",
            Substrate: 17,
            TTL: 38,
            badmark: 12,
            ASSY_input: 15,
            NG: 3,
            Good: 42,
        },
        {
            LotId: "TYLOTSER5",
            stationName: "PKB",
            Direction: "Up",
            Timestamp: "2024-01-22T12:00:00",
            Substrate: 22,
            TTL: 48,
            badmark: 29,
            ASSY_input: 9,
            NG: 6,
            Good: 57,
        },
        {
            LotId: "TYLOTSER6",
            stationName: "asdf",
            Direction: "Up",
            Timestamp: "2024-01-22T12:00:00",
            Substrate: 20,
            TTL: 52,
            badmark: 21,
            ASSY_input: 14,
            NG: 8,
            Good: 63,
        },
        {
            LotId: "TYLOTSER7",
            stationName: "asfh",
            Direction: "Up",
            Timestamp: "2024-01-22T12:00:00",
            Substrate: 18,
            TTL: 45,
            badmark: 37,
            ASSY_input: 20,
            NG: 2,
            Good: 49,
        },
        {
            LotId: "TYLOTSER8",
            stationName: "asdf",
            Direction: "Down",
            Timestamp: "2024-01-22T12:00:00",
            Substrate: 25,
            TTL: 40,
            badmark: 15,
            ASSY_input: 11,
            NG: 9,
            Good: 33,
        },
        {
            LotId: "TYLOTSER9",
            stationName: "ujkl;",
            Direction: "Up",
            Timestamp: "2024-01-22T12:00:00",
            Substrate: 13,
            TTL: 60,
            badmark: 41,
            ASSY_input: 16,
            NG: 1,
            Good: 27,
        },
        {
            LotId: "TYLOTSER10",
            stationName: "lqasdf",
            Direction: "Down",
            Timestamp: "2024-01-22T12:00:00",
            Substrate: 19,
            TTL: 44,
            badmark: 19,
            ASSY_input: 17,
            NG: 10,
            Good: 59,
        }
    ];
    
        onSetData(dataFromServer)
    }

    useEffect(()=>{
      onFetchLasted() ; 
    },[])

    return (
        <section className='flex flex-col'>
            <Header />
            <CurrentLots currentData={currentData} />
            <Footer/>
        </section>
    )
}