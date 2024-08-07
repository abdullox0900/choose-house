import React, { ReactNode } from 'react'

interface Children {
  children: ReactNode
}

export const MainSection = (props: Children) => {
  return (
    <main className='px-[20px]'>
      {props.children}
    </main>
  )
}
