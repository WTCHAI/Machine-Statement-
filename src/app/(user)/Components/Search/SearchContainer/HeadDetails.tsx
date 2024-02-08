import React from 'react';
import { lotDetails } from '../../navMenu/interface/lotDetail';
import { lotSubDetails } from '../../navMenu/interface/lotSubDetails';
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
                <p className='text-center pt-[2vh] w-full cursor-default hover:text-slate-400'>Station</p>
              </div> 
          </li>
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center pt-[2vh] w-full cursor-default hover:text-slate-400'>Direction</p>
            </div> 
          </li>
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center pt-[2vh] w-full cursor-default hover:text-slate-400'>Date</p>
            </div> 
          </li>  
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center pt-[2vh] w-full cursor-default hover:text-slate-400'>Substrate</p>
            </div> 
          </li>  
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center pt-[2vh] w-full cursor-default hover:text-slate-400'>TTL</p>
            </div> 
          </li>   
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center pt-[2vh] w-full cursor-default hover:text-slate-400'>Bad</p>
            </div> 
          </li>
          <li className={`flex flex-row w-full h-full] items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center pt-[2vh] w-full cursor-default hover:text-slate-400'>Assy input</p>
            </div> 
          </li>   
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center pt-[2vh] w-full cursor-default hover:text-slate-400'>NG</p>
            </div> 
          </li>   
          <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
            <div className='flex w-full  tracking-tighter leading-tight text-slate-500 text-md font-medium '>
              <p className='text-center pt-[2vh] w-full cursor-default hover:text-slate-400'>Good</p>
            </div> 
          </li>   
        </>
      }
      { !pathName.id && 
      <>
        <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
          <div className='flex w-full tracking-tighter leading-tight text-gray-600 text-md font-medium'>
            <p className=' text-xl font-medium pl-[3vw] pt-[2vh] cursor-default hover:text-gray-500'>Lot Id</p>
          </div> 
        </li>
        <li className={`flex flex-row w-full h-full items-center bg-transparent `}>
          <div className='flex w-full tracking-tighter leading-tight text-gray-600 text-md font-medium'>
            <p className='  text-xl font-medium pl-[3vw] pt-[2vh] cursor-default hover:text-gray-500'>Date</p>
          </div> 
        </li>    
      </>

      }

    </ul>
  );
}
