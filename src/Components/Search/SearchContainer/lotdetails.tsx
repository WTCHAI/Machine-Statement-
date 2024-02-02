import React from 'react';
import { lotDetails } from '../../interface/lotDetail';
import { lotSubDetails } from '../../interface/lotSubDetails';
import { useParams } from 'next/navigation';

type Props = {
  lotDetail: lotDetails | lotSubDetails;
};

export default function Lotdetails({ lotDetail }: Props) {
  const pathName = useParams()

  const keys = Object.keys(lotDetail);

  return (
    <div className='flex flex-row justify-center w-full h-full items-center'>
      {keys.map((key: any) => {
        let result: any = lotDetail[key];
        switch (key) {
          case 'Timestamp':
            let [date,time] = result.split("T")
            const [year, month, day] = date.split('-');
            let datepart = `${day}/${month}/${year.slice(-2)}`
            let timepart = time.split("-")
            result = `${datepart} : ${timepart}`
          break;
          case 'badmark':
            return (
              <p
                key={key}
                className={`flex w-full justify-center text-red-500 ${ keys.length === 2 ? 'text-xl' : 'text-md'}`}
              >
                {`${result}`}
              </p>
            );        
          case 'Good' : 
          return (
            <p
              key={key}
              className={`flex w-full justify-center text-green-500 ${ keys.length === 2 ? 'text-xl' : 'text-md'}`}
            >
              {`${result}`}
            </p>
          );   
          default:
            break;
        }

        if ( key == 'LotId' && pathName.id){
          return ;
        }
        return (
          <p
            key={key}
            className={`flex w-full justify-center 
              ${ keys.length === 2 ? 'text-xl' : 'text-md'}
            `}
            >
              {`${result}`}
            </p>
          );          
      })}
    </div>
  );
}
