import React from 'react'

import { FaSearch } from 'react-icons/fa'
import Currentstat from './currentstat'

type Props = {}

export default function Header({}: Props) {
  return (
    <section  className='w-full flex flex-row justify-between items-center px-[2vw] py-[1vh]'>
        <div className='w-[40vw] ' >
            <form
                className='flex flex-row w-full bg-gray-200 bg-opacity-90 items-center justify-start px-[2vw]  outline-slate-100 rounded-2xl shadow-sm outline-1'
                // onSubmit={onSubmitHandler}
            >
                <input
                type='text'
                placeholder='Search...'
                className='outline-0 bg-transparent text-lg w-full cursor-pointer py-[0.5vh] text-slate-800'
                // value={inputValue}
                // onChange={(e) => {
                //     setInputValue(e.target.value)
                // }}
                />
                <button type="submit" className='p-[0.5vw] hover:text-slate-500 hover:scale-105'>
                <FaSearch className='text-xl font-thin cursor-pointer text-slate-600  '/>
                </button>
            </form>
            </div>
            <Currentstat/>

    </section>
  )
}