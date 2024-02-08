"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


import { lotDetails } from '../../navMenu/interface/lotDetail'
import { lotSubDetails } from '../../navMenu/interface/lotSubDetails'

import HeadDetails from './HeadDetails'
import SearchHeader from '../SearchBar/SearchHeader'
import SearchResultlist from './searchResultlist'
import SearchFooter from './SearchFooter'

type Props ={
}

type DataType = lotDetails[] | lotSubDetails[]

export default function Maincontainer({}: Props) {
  const router = useRouter()
  const pathName = useParams()

  const [data,onSetData] = useState<DataType>([])
  const [pageStatus , onsetCurrentPage] = useState({
    startIndex : 0 ,
    currentPage : 1 , 
    totalPage : 1
  })

  const [calendar,onSetcalendar] = useState<any>(null) 

  const [isLoading , setLoading] = useState<boolean>(true) 

  const onPageChangeHandler = async (type: string) => {
    setLoading(true);
    let newStartIndex = pageStatus.startIndex

    if (type === "Increase") {
      if (pageStatus.currentPage < pageStatus.totalPage ) {

        onsetCurrentPage({
            ...pageStatus , 
            currentPage : pageStatus.currentPage+1 ,
            startIndex : pageStatus.currentPage*10
        })
        newStartIndex = pageStatus.currentPage*10
      }

      // }
    } else if (type === "Decrease") {
      if (pageStatus.currentPage > 1 && pageStatus.currentPage !== 1 ) {
        onsetCurrentPage({
          ...pageStatus , 
          currentPage : pageStatus.currentPage-1,
          startIndex : (pageStatus.currentPage-2)*10
        })
        newStartIndex = (pageStatus.currentPage-2)*10
      }
    }

    const currentLotStorage = sessionStorage.getItem("currentLots");

    if (!pathName.id && currentLotStorage && pageStatus.currentPage <= pageStatus.totalPage) {
      const currentLots = JSON.parse(currentLotStorage);

      const tempData: DataType = pageStatus.currentPage === Math.ceil(currentLots.length / 10)
        ? currentLots.slice(newStartIndex, currentLots.length - 1)
        : currentLots.slice(newStartIndex,newStartIndex + 10)
      onSetData(tempData)
      }
      setLoading(false);
  }
  
  const onFetchingLots = async( targetKey : any )=>{
    setLoading(true)

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
      },      
      {
        LotId: "12",
        Timestamp: "2024-01-22T17:30:00",
      },      
      {
        LotId: "13",
        Timestamp: "2024-01-22T17:30:00",
      },      
      {
        LotId: "14",
        Timestamp: "2024-01-22T17:30:00",
      },      
      {
        LotId: "15",
        Timestamp: "2024-01-22T17:30:00",
      },      
      {
        LotId: "17",
        Timestamp: "2024-01-22T17:30:00",
      },      
      {
        LotId: "18",
        Timestamp: "2024-01-22T17:30:00",
      },      
      {
        LotId: "19",
        Timestamp: "2024-01-22T17:30:00",
      },      
      {
        LotId: "20",
        Timestamp: "2024-01-22T17:30:00",
      },      
      {
        LotId: "21",
        Timestamp: "2024-01-22T17:30:00",
      },      
      {
        LotId: "22",
        Timestamp: "2024-01-22T17:30:00",
      }
    ];
    //after getting it store it to sesionstorage 
    sessionStorage.setItem('currentLots',JSON.stringify(dataFromServer))

    setTimeout(() => {
      // After the delay, set the data and setLoading to false
      const tempData: DataType = dataFromServer.slice(0, 10)
      onSetData(tempData)
      setLoading(false)
    }, 2000)
    onsetCurrentPage({
      startIndex : 0 ,
      currentPage : 1 , 
      totalPage : Math.ceil(dataFromServer.length / 10)
    })
    router.replace('/search')
  }
  // after get lot target fetch list of lot details
  const onFetchingLotDetails = async(targetKey : any)=>{
    setLoading(true)
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
    setTimeout(() => {
      // onSetData(dataFromServer)
      //save Data to local storage
      sessionStorage.setItem('currentDetails',JSON.stringify(dataFromServer))
      onSetData(dataFromServer)
      setLoading(false)       
    },1000)

  }

  //calendar filter 
  const onFiterDate = (targetDate:any)=>{
    onSetcalendar(targetDate)
  }

  const onUpdatedDataFromStorage = ()=>{
    const currentLotStorage = sessionStorage.getItem("currentLots");
    const currentLotDetails = sessionStorage.getItem("currentDetails");

    if (!pathName.id && currentLotStorage) {
      const currentLots = JSON.parse(currentLotStorage);

      onsetCurrentPage({
        ...pageStatus,
        totalPage: Math.ceil(currentLots.length / 10),
      });

      const tempData: DataType =
        pageStatus.currentPage === Math.ceil(currentLots.length / 10)
          ? currentLots.slice(pageStatus.startIndex, currentLots.length - 1)
          : currentLots.slice(pageStatus.startIndex,pageStatus.startIndex + 10)
      onSetData(tempData);
    } else if (pathName.id && currentLotDetails) {
      onSetData(JSON.parse(currentLotDetails));
    }
    setLoading(false);
  }

  useEffect(() => {
    // Fetch initial data and handle sessionStorage updates
    onUpdatedDataFromStorage();
    
  }, []);

  return (
    <>
      <SearchHeader onFetcing={onFetchingLots} onFilterDate={onFiterDate}/>
        <main className='w-full  px-[1vw]' >
          <HeadDetails data={data[0]}/>
          <ul className='flex flex-col h-[82vh] w-full gap-y-[0.7vh] mt-[0.5vh]'>
              <SearchResultlist 
                data={data}
                isLoading={isLoading}
                onFetchingLotDetails={onFetchingLotDetails}
              />
          </ul> 
        </main>
      <SearchFooter onPageChangeHandler={onPageChangeHandler} pageStatus={pageStatus}/>  
    </>
  )
}