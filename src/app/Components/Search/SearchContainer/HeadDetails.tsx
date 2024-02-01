import React from 'react';
import { lotDetails } from '../../interface/lotDetail';
import { lotSubDetails } from '../../interface/lotSubDetails';
import { useParams } from 'next/navigation';

type DataType = lotDetails | lotSubDetails;

type Props = {
  data: DataType;
};

export default function HeadDetails({ data }: Props) {

  const pathName = useParams();

  return (
    <ul className='flex flex-row h-[6vh]'>
      {
        pathName.id &&
        <>
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
              <div className='flex w-full tracking-tighter leading-tight text-slate-500 text-md font-medium'>
                <p className='text-center w-full'>Station</p>
              </div> 
          </li>
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center w-full'>Direction</p>
            </div> 
          </li>
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center w-full'>Date</p>
            </div> 
          </li>  
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center w-full'>Substrate</p>
            </div> 
          </li>  
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center w-full'>TTL</p>
            </div> 
          </li>   
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center w-full'>Bad</p>
            </div> 
          </li>
          <li className={`flex flex-row w-full h-full] items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center w-full'>Assy input</p>
            </div> 
          </li>   
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center w-full'>NG</p>
            </div> 
          </li>   
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center w-full'>Good</p>
            </div> 
          </li>   
        </>
      }
      { !pathName.id && 
      <>
        <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
          <div className='flex w-full tracking-tighter leading-tight text-slate-500 text-md font-medium'>
            <p className=' w-full text-xl font-medium pl-[3vw]'>Lot Id</p>
          </div> 
        </li>
        <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
          <div className='flex w-full tracking-tighter leading-tight text-slate-500 text-md font-medium'>
            <p className='w-full text-xl font-medium pl-[3vw]'>Date</p>
          </div> 
        </li>    
      </>

      }

    </ul>
  );
}
