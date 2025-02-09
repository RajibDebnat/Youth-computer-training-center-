import Image from "next/image";
import React from "react";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import HomeBtn from "./ui/home-btn";
import Reveal from "./parts/Reveal";


function About() {
  return (
    <div className=" relative max-w-[90vw] max-xl:max-w-[100vw] mx-auto px-16 py-6 max-md:p-0  ">
      <Reveal  width="fit content" >

      <div className=" max-md:hidden absolute -z-30 w-[800px] h-[800px] rounded-full bg-brown-100 top-[-100px] right-[-400px]"/>
      </Reveal>
      <Reveal width="fit content" direction="x">

      <h1 className=" text-center text-6xl  max-md:text-6xl max-sm:text-5xl font-bold font-Prompt  text-slate-800 mb-14">
        
        About Us
      </h1>
      </Reveal>
      <div className=" grid grid-cols-2  max-lg:grid-cols-1  gap-2">
        <Reveal width=" content fit" direction="x">

        <div className="p-6 flex flex-col  justify-center   relative">
          <h2 className="  max-sm:text-3xl text-4xl font-semibold leading-10 mb-6   font-Prompt  text-slate-700">
            Transforming Lives Through{" "}
            <span className=" max-sm:text-4xl text-5xl font-bold text-slate-800  ">
              Quality Computer Education!{" "}
            </span>{" "}
          </h2>
          <p className="  font-medium  text-slate-500  max-sm:text-[16px]  font-montserrate text-lg leading-normal  w-[90%] max-sm:line-clamp-[7]">
          At Youth Computer Training Center, we are dedicated to empowering individuals with essential computer skills for a successful future. Our comprehensive training programs cover everything from Microsoft Office (Excel, Word, PowerPoint) to computer hardware and troubleshooting.
          </p>
          <div className=" mt-6">
            <HomeBtn className=" hover:bg-dark-blue bg-blue gap-2">
              Know More
            </HomeBtn>
          </div>
        </div>
        </Reveal>
        <div className=" flex justify-center">
          <Reveal width=" content fit">

          <Image
            className="  rounded-lg object-fit "
            alt=" 3 student holding laptop"
            src={"/about.jfif"}
            width={500}
            height={500}
            />
            </Reveal>
        </div>
      </div>
    </div>
  );
}

export default About;
