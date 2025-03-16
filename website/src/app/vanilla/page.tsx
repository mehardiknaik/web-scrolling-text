import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Vanilla',
}

const VanillaPage = () => {
  return (
    <div className='min-h-[calc(100vh-85px)] md:min-h-[calc(100vh-60px)] w-full'>Vanilla Coming Soon...</div>
  )
}

export default VanillaPage