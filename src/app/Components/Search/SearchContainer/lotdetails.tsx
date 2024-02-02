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
      {keys.map((key: string) => {
        let result: string = lotDetail[key];

        switch (key) {
          case 'Timestamp':
            let [date,time] = result.split("T")
            const [year, month, day] = date.split('-');
            let datepart = `${day}/${month}/${year.slice(-2)}`
            let timepart = time.split("-")
            result = `${datepart} : ${timepart}`
          break;
          case 'ASSY_input':
            break;
          case 'TTL':
            break;
          case 'badmark':
            break;
          case 'NG':
            break;
          default:
            break;
        }
        if ( key == 'LotId' && pathName.id){
          return ;
        }
        return (
          <p
            key={key}
            className={`flex w-full justify-center text-slate-500
              ${ keys.length === 2 ? 'text-xl' : 'text-md'}
              ${key == "badmark" ? 'text-red-500': ''} 
              ${key == 'Good' ? 'text-green-500': ''}
              `}
          >
            {`${result}`}
          </p>
        );
      })}
    </div>
  );
}
