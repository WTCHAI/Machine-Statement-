import React, { useEffect, useState } from 'react';

import { FaSearch } from 'react-icons/fa';


type Props = {
  onFetching : (type : any )=> void
};

export default function SearchBar({onFetching}: Props) {
  const [inputValue, setInputValue] = useState('');

  const onSubmitHandler = (e : React.FormEvent)=>{
    e.preventDefault()
    onFetching(inputValue) ;
    setInputValue("")
  }

  return (
    <div className='text-slate-800 w-[40vw]'>
      <form
        className='flex flex-row w-full bg-white bg-opacity-90 items-center justify-start px-[2vw]  outline-slate-100 rounded-2xl shadow-sm outline-1'
        onSubmit={onSubmitHandler}
      >
        <input
          type='text'
          placeholder='Search...'
          className='outline-0 bg-transparent text-lg w-full cursor-pointer py-[0.5vh]'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
        />
        <button type="submit" className='p-[0.5vw] hover:text-slate-500 hover:scale-105'>
          <FaSearch className='text-xl font-thin cursor-pointer text-slate-600  '/>
        </button>
      </form>
    </div>
  );
}
