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
      <div id='courses' className=' relative p-16 max-xl:p-6 '>
        <Reveal width='content fit'>

        <h2 className=' max-sm:text-5xl max-[370px]:text-[37px] text-6xl font-Prompt font-bold text-center mb-5 text-slate-700'>Course Details</h2>
        </Reveal>
        <BackgroundLines className="flex mt-8 items-center justify-center w-full flex-col px-4 ">

  <Reveal width='fit content'>

        <div className="  relative z-20 gap-6  flex justify-center   flex-wrap ">
  {courses.map(course=>(
   
   <div  
  className="justify-center shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out border-[1px] border-slate-200 p-8 max-[430px]:p-2 w-[400px] max-lg:w-[90%] bg-white rounded-xl"
>
  <h4 className="text-2xl font-semibold text-slate-800 font-Prompt mb-5 text-center">
    {course.courseName}
  </h4>
  <ul className="flex flex-col justify-center gap-2">
    <CourseList leftHeading="Skills:" courseItem={`${course.skills}`} />
    <CourseList leftHeading="Duration:" courseItem={`${course.duration}`} />
    <CourseList leftHeading="Certificate:" courseItem={`${course.certificate}`} />
    <CourseList leftHeading="Fees:" courseItem={`${course.fees}`} />
    <CourseList leftHeading="Instructor:" courseItem={`${course.instructorName}`} />
    
    <CourseButton>
      Contact Us
    </CourseButton>
  </ul>
</div>

  ))}
  </div>
  </Reveal>
      
  </BackgroundLines>
      </div>
    )
  }

  export default CourseDetails