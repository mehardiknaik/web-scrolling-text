import { Metadata } from 'next'
import React from 'react'
import Fadein from './_fadein'
import Default from './_default'
import Scale from './_scale'

export const metadata: Metadata = {
  title: 'Example',
}

const ExamplePage = () => {
  return (
    <div className='container grid md:grid-cols-3 gap-2 p-2'>
      <Default/>
      <Fadein/>
      <Scale/>
    </div>
  )
}

export default ExamplePage