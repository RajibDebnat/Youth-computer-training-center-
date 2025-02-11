import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { people } from "../raw-data/data";
import HomeBtn from "./ui/home-btn";
import { FaLocationArrow } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import { FaBrain } from "react-icons/fa";
import Reveal from "./parts/Reveal";
function Hero() {
  return (
    <div id="home" className=" relative  max-sm:px-2  p-6 mt-8   max-md:mt-20 flex justify-center   min-h-[100vh ]">
      <BackgroundBeamsWithCollision>
        {/* Grid container */}
        <div className=" py-10  mx-auto   grid grid-cols-2  max-md:grid-cols-1  w-[85vw] place-items-center">
          {/* Left grid item */}

         
          <div className=" max-w-[60rem] pl-6 max-lg:pl-2">
          <Reveal width=" content fit" >
            <p className=" mb-3 text-xl text-amber-900 flex gap-1  items-center">
              <FaBrain />{" "}
              <span className=" max-sm:text-lg  font-montserrate  tracking-normal  font-medium  text-amber-900 ">
                {" "}
                Get ahead from everyone
              </span>
            </p>
            <div>
              <h1 className="  max-[350px]:text-[40px] max-sm:text-[56px] max-lg:text-7xl  max-md:text-7xl font-Prompt text-8xl max-lg:text-7xl   leading-[0.9]  text-slate-900 font-bold ">
                {" "}
                Future-Proof Career with Experts
                <span className=" ml-2  inline-block">
                  <AnimatedTooltip items={people} />
                </span>
              </h1>

              <p className=" max-sm:text-[16px]  my-6 max-w-[30rem] font-montserrate text-slate-800 text-lg">
                {" "}
                Unlock your potential with cutting-edge computer training
                tailored for all skill levels. Learn industry-relevant tools,
                boost your career, and stay ahead in the digital world. Take the
                first step toward success—click ‘Learn More’ today.
              </p>
            </div>
            <div className=" mt-8 flex   items-center gap-11">
              <div className=" max-md:flex-col max-md:gap-3 flex gap-8 justify-center items-center">
                <HomeBtn className=" bg-blue gap-2">
                  <span className=" font-semibold">Learn More</span>
                  <FaLocationArrow />
                </HomeBtn>
                <Link
                  className="relative after:hover:hidden font-normal text-slate-900 text-xl font-montserrate after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-slate-800 after:left-0 after:bottom-[-3px] max-sm:text-[18px]"
                  href={""}
                >
                  Our Features
                </Link>
              </div>
              <Link
                href={"https://youtu.be/SFTYmGL-Sfg?si=Sgt4XJd04LUmfimi"}
                className=" hover:bg-amber-900    cursor-pointer flex justify-center items-center text-white  w-16  h-16 max-sm:w-12 max-sm:h-12 bg-brown rounded-full"
              >
                <FaPlay />
              </Link>
            </div>
            </Reveal>
          </div>

          {/* Right grid item containing the image */}
          <div className="  mx-lg:hidden a max-md:mt-10 flex items-center justify-center">
          <Reveal width=" content fit" direction="x" >

            <Image
              src="/exel.png"
              alt="students holding laptop and showing that they learn computer"
              width={500}
              height={500}
              className=" inline-block object-cover"
              />
              </Reveal>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

export default Hero;
