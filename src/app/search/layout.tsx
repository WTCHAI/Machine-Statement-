import SideBar from '@/app/Components/layouts/sideBar'
import React from 'react'

type Props = {}

export default function layout({children,}: {children: React.ReactNode}) {
  return (
    <main className='flex flex-row w-full'>
        <SideBar/>
        {children}
    </main>
  )
}