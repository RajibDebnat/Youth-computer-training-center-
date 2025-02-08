'use client'

import React, { ReactNode } from 'react'
import { useEffect,useRef } from 'react';
import { motion,useInView,useAnimation } from 'framer-motion';
function Reveal({children,width="fit content",direction='y'}:{children:ReactNode ,width:string,direction?:string}) {
  const ref = useRef(null);
  const IsInView = useInView(ref,{once:true})
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(()=>{
    if(IsInView)mainControls.start('visible')
  },[IsInView]);

  return (
    <div ref={ref} className={` relative, overflow-hidden  ${width} ${direction&& direction}`}>
      <motion.div variants={{
        hidden:{opacity:0,[direction]:75},
        visible:{opacity:1,[direction]:0}
      }}
      initial="hidden"  
      animate={mainControls}
      transition={{duration:0.5,delay:0.25}}>
 {children}
      </motion.div>
    </div>
  )
}

export default Reveal