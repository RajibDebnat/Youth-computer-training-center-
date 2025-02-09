import { Import } from "lucide-react";
import About from "../components/About";
import CourseDetails from "../components/CourseDetails";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { FeaturesSec } from "../components/Features";
import Testimonial from "../components/Testimonial";
import FormSection from "components/FormSection";

export default function Home() {
  return (
    <div className="   max-md:p-0  p-12  max-lg:p-8    overflow-clip max-sm:p-2 ">
      <Navbar/> 
      <Hero/>
      <CourseDetails/>
      <About/>
      <FeaturesSec/>
      <Testimonial/>
      <FormSection/>
      
    </div>
  );
}
