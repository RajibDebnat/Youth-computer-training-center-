import Image from 'next/image'
import books from '../public/features/books.png'
import bag from '../public/features/bag.png'
import hat from '../public/features/hat.png'
import trophy from '../public/features/trophy.png'
import test1 from '../public/testimonial/test1.png'

import test3 from '../public/testimonial/test3.png'
import test4 from '../public/testimonial/test4.png'

 export const content = [
  {
    id:"ccc1",
    title: "Comprehensive Course Curriculum",
    description:
      " Learn essential computer skills, including Microsoft Excel, Word, PowerPoint, and computer hardware, all in one place.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center p-1 bg-blue rounded-2xl">
     <Image className=" object-fit" src={books} alt=" books image" height={250} width={250}/>
      </div>
    ),
  },
  {
    id:"elt2",
    title: "Expert-Led Training ",
    description:
      "Get hands-on learning from experienced instructors with real-world industry knowledge.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center p-1 bg-green-100 rounded-2xl">
      <Image className=" object-fit" src={hat} alt=" books image" height={300} width={300}/>
       </div>
    ),
  },
  {
    id:"irc3",
    title: "Industry-Recognized Certification",
    description:
      " Earn a valuable certificate upon course completion to boost your career prospects.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center p-1 bg-blue rounded-2xl">
      <Image className=" object-fit" src={trophy} alt=" books image" height={250} width={250}/>
       </div>
    ),
  },
  {
    id:"pjol4",
    title: "Practical & Job-Oriented Learning",
    description:
      "Work on real-world projects and case studies to develop skills that employers seek.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center p-1 bg-brown rounded-2xl">
     <Image className=" object-fit" src={bag} alt=" books image" height={250} width={250}/>
      </div>
    ),
  },
  {
    title: "",
    description:
      "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center p-1 bg-brown rounded-2xl">
     <Image className=" object-fit" src={bag} alt=" books image" height={250} width={250}/>
      </div>
    ),
  },

 
];
 
 export const people = [
    {
      id: 1,
      name: "Suparna ",
      designation: "website developer",
      image:
        "/tooltip/test3 (3).png",
    },
    {
      id: 2,
      name: "Riju",
      designation: "excel exper",
      image:
        "/tooltip/test3 (2).png",
    },
    {
      id: 3,
      name: "Abhijit",
      designation: "Tally master",
      image:
        "/tooltip/test3 (1).png",
    },
    
  ];
  export const navLinks = [
    { id: 1, title: "Home", link: "#home" },
    { id: 3, title: "Courses", link: "#courses" },
    { id: 2, title: "About", link: "#about" },
    { id: 4, title: "Contact", link: "#contact" },
  ];
  export const courses = [
    {
      id:1,
      courseName: "Web Development",
      duration: "6 months",
      certificate: "true",
      fees: "₹25,000",
      instructorName: "Rajesh Kumar",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    },
    {
      id:2,
      courseName: "Graphic Design",
      duration: "4 months",
      certificate: "true",
      fees: "₹18,000",
      instructorName: "Sneha Sharma",
      skills: ["Photoshop,", "Illustrator,", "Figma,", "UI/UX Design"]
    },
    {
      id:3,
      courseName: "Digital Marketing",
      duration: "3 months",
      certificate: "true",
      fees: "₹15,000",
      instructorName: "Amit Verma",
      skills: ["SEO,", " Social Media Marketing,", " Google Ads,", " Content Marketing,"]
    }
  ];
 export const testimonials = [
    {
     id:'testi1',
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: test4,
    },
    {
      id:'testi2',
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: test3,
    },
 
    {
      id:'testi3',
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: test1,
    },
    {
      id:'testi4',
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: test3,
    },
  ];

  
  

  