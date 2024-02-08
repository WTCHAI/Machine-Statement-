import React from 'react'
import MainContainer from '../Components/Dashboard/mainContainer'

type Props = {}

export default function Dashboard({}: Props) {
  return (
    <main className='h-full w-full flex flex-col bg-slate-50'> 
      <MainContainer/>
    </main>
  )
}