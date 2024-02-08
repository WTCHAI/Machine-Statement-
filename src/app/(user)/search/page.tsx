
import React from 'react'

import { Suspense } from 'react'

import Maincontainer from '../Components/Search/SearchContainer/maincontainer'
import Loading from './loading'

type Props = {}

export default function Search({}: Props) {
  console.log("heloqwrpjg")
  //exam 
  // const user - awiat db.collection("users").get().
  return (
    <main className='h-full w-full flex flex-col bg-slate-50'> 
        <section className='h-full flex flex-col'>
          {/* <Suspense> */}
            <Maincontainer />
          {/* </Suspense> */}
        </section>
    </main>
  )
}