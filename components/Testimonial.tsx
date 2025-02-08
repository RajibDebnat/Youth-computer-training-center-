import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import { testimonials } from '../raw-data/data'
import SectionHeading from './parts/SectionHeading'
import Reveal from './parts/Reveal'
function Testimonial() {
  return (
    <div className=' flex   justify-center p-16  max-md:p-8 max-sm:p-2 bg-brown rounded-xl'>
        <div>

        <Reveal width='content fit' direction='x'>

        <SectionHeading className=' text-white'>
            Testimonial
        </SectionHeading>
        </Reveal>
        <Reveal width='content fit' >
        <AnimatedTestimonials testimonials={testimonials} />
        </Reveal>
    </div>
        </div>
  )
}

export default Testimonial