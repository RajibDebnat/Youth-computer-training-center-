import React from 'react'

function HomeBtn({ className,children}:{className?:string,children:React.ReactNode}) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className={` ${className} font-montserrate inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  px-5 py-1 text-sm max-sm:text-[12px] font-medium text-white backdrop-blur-3xl`}>
   {children}
  </span>
</button>
  )
}

export default HomeBtn