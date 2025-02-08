import React, { ReactNode } from 'react'

function SectionHeading({className,children}:{children:string,className?:string}) {
  return (
    <h1 className={` text-center text-6xl  max-md:text-6xl max-sm:text-5xl font-bold font-Prompt  text-slate-800 mb-14 ${className}`}>
        
      {children}
      </h1>
  )
}

export default SectionHeading