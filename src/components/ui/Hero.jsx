import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import React from "react";

const firstVariant = {
    visible: { opacity: 1, transition: { duration: 1.5 }, x:0 },
    hidden: { opacity: 0, x:50}
  };
const Hero = () => {

    const {progress} = useProgress()

  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col  w-screen bg-[#6f6de2] px-6'>
      <motion.h1 variants={firstVariant} initial='hidden' animate={progress == 100 ? 'visible' : ''} className='sm:ml-20 font-extrabold text-[#fdd9d9] text-center sm:text-right w-full text-[30px] sm:text-[15vw] '>REFRESHING</motion.h1>
      <div className='flex container mx-auto  justify-between'>
        <p className='max-w-[20rem] text-[#fdd9d9] hidden sm:block'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde dolores optio aperiam totam, nobis, explicabo, mollitia vel
          consequatur corporis veniam aut? Provident at rem eligendi dignissimos illum quae expedita?
        </p>
        <div>
          <button className='bg-[#f1a652] py-8 px-10 rounded-r-xl h-auto text-2xl font-semibold hidden sm:block'>Try it now</button>
        </div>
        {/* For mobile buttons */}
        <div className='w-full flex justify-center gap-4  md:hidden'>
          <button className='bg-[#f1a652] w-1/3 py-2 px-2 rounded-l-xl h-auto text-lg  block  md:hidden'>Try it now</button>

          <button className='bg-[#f1a652] w-1/3 py-2 px-2 rounded-r-xl h-auto text-lg  block sm:hidden'>Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
