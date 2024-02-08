import SideBar from '@/app/(user)/Components/layouts/sideBar'
import React from 'react'

type Props = {}

export default function layout({children,}: {children: React.ReactNode}) {
  return (
    <main className='flex flex-row w-full h-full'>
        <SideBar/>
        {children}
    </main>
  )
}