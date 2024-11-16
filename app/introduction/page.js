
import React from 'react'
import { Navbar } from '@/components/ui/navbar'; 
import '../globals.css'
import Timeline from '@/components/ui/Timeline'

const page = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='unicbg2' />
        <div className='flex items-center justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
          <div className=''>
            <h1 className='font-bold text-2xl italic'>eCommerce events we are gonna host soon!!</h1>
            <h2>Stay tuned to the next events!!</h2>
            <h3>Bear in mind all activities could switch of schedule unexpectedly!!</h3>
            <p>Any changing on our events will be notified do not worry!!</p>
          </div>
        </div>
      <div className='ml-10'>
      <p>All the events we are goint to host will take place in Bogota but we are gonna schedule over the next year in multiple locations in Colombia as well as overseas so stay tunned!!</p>
      </div>
      <div>
        <Timeline />
      </div>
    </div>
  )
}

export default page