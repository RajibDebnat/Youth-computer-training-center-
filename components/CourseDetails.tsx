import React from 'react'
import { courses } from '../raw-data/data'
import Image from "next/image";
 import CourseButton from './ui/CourseButton';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import CourseList from './parts/CourseList';
import { BackgroundLines } from './ui/background-lines';
import Link from "next/link";
import Reveal from './parts/Reveal';
function CourseDetails() {
  return (
    <div className=' relative p-16 max-xl:p-6 '>
      <Reveal width='content fit'>

      <h2 className=' max-sm:text-5xl max-[370px]:text-[37px] text-6xl font-Prompt font-bold text-center mb-5 text-slate-700'>Course Details</h2>
      </Reveal>
       <BackgroundLines className="flex mt-8 items-center justify-center w-full flex-col px-4 ">

<Reveal width='fit content'>

      <CardContainer className="  relative z-50 gap-6  flex justify-center   flex-wrap ">
{courses.map(course=>(
  <CardBody className="bg-brown  flex justify-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl  border  ">
  <CardItem translateZ={20} className='  justify-center shadow-xl  p-8 max-[430px]:p-2 w-[400px]  max-lg:w-[90%] bg-white rounded-xl'>
  <h4 className='  text-2xl font-semibold text-slate-800 font-Prompt mb-5  text-center'>{course.courseName}</h4>
  <ul className=' flex flex-col   justify-center gap-2'>
   
    <CourseList  leftHeading={'Skills:'} courseItem={`${course.skills}`} />
    <CourseList leftHeading={'Duration:'} courseItem={`${course.duration}`} />
    <CourseList leftHeading={'Certificate:'} courseItem={`${course.certificate}`} />
    <CourseList leftHeading={'Fees:'} courseItem={`${course.fees}`} />
    <CourseList leftHeading={'Instructor:'} courseItem={`${course.instructorName}`} />
    
    
    
  <CourseButton>
    Contact Us
  </CourseButton>
  </ul>
  
</CardItem>
</CardBody>
))}
</CardContainer>
</Reveal>
     
</BackgroundLines>
    </div>
  )
}

export default CourseDetails