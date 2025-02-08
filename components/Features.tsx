"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import SectionHeading from "./parts/SectionHeading";
import { FaBookOpen } from "react-icons/fa";
import { content } from "../raw-data/data";
import Reveal from "./parts/Reveal";
export function FeaturesSec() {
  return (
    <div className="p-16   w-[90vw] mx-auto ">
      <Reveal direction="x" width='content fit'>

       <SectionHeading className={ ' text-center mt-8'}>
        Features
       </SectionHeading>
       </Reveal>
      <Reveal  width='content fit'>
      <StickyScroll content={content} />
      </Reveal>
    </div>
  );
}
