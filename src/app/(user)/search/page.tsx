'use client'

import React from 'react'
  
import Maincontainer from '../../../Components/Search/SearchContainer/maincontainer'

type Props = {}

export default function Search({}: Props) {

  return (
    <main className='h-full w-full flex flex-col'> 
        <section className='h-full flex flex-col'>
          <Maincontainer />
        </section>
    </main>
  )
}