import React from 'react'
import SearchBar from './searchBar'
import Calendar from './calendar'
import ExportBtn from './exportBtn'

type Props = {
    onFetcing : (targetKey : any)=> void,
    onFilterDate : (targetDate : any)=> void
}

export default function SearchHeader({onFetcing , onFilterDate }: Props) {
  return (
    <header className='w-full flex flex-row justify-between items-center px-[2vw] bg-slate-600 py-[0.5vh]'>
        <div>
            <SearchBar onFetching={onFetcing}/>
        </div>
        <div className='flex flex-row gap-x-[1vw]'>
            <Calendar onFilterDate={onFilterDate}/>                    
            <ExportBtn/>            
        </div>

    </header>
    )
}