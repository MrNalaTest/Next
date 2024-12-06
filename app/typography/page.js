import { Footer } from '@/components/ui/Footer'
import { Navbar } from '@/components/ui/navbar'
import RevolutionSlider from '@/components/ui/RevolutionSlider'
import React from 'react'

const page = () => {
  return (  
    <div>
        <Navbar />
      <div>
        <div className=''>
          <div className='h-14'></div>
          <RevolutionSlider />
        </div>  
      </div>
      <Footer />
    </div>
  )
}

export default page