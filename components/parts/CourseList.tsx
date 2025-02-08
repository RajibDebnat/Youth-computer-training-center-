import React from 'react'

function CourseList({leftHeading,courseItem}:{leftHeading:string,courseItem:string}) {
  return (
    <li className='  font-montserrate items-center    flex gap-2 text-wrap'>
      <span className=' font-bold text-lg '>{leftHeading}</span>
      <span className=' text-[16px] text-slate-700 font-semibold  break-words '> {courseItem}</span>
     
    </li>
  )
}

export default CourseList