import { Metadata } from 'next'
import React from 'react'
import Simple from './Simple'

export const metadata: Metadata = {
  title: 'Vanilla',
}

const VanillaPage = () => {
  return (
    <div className="min-h-[calc(100vh-85px)] md:min-h-[calc(100vh-60px)]">
    <Simple />
  </div>
  )
}

export default VanillaPage