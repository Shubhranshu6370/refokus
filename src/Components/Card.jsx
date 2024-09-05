import { motion } from "framer-motion";
import React from "react";
import { MdArrowForward } from "react-icons/md";

function Card({width,start,para,hover="false"}) {
  
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff",padding:"25px"}} className={` bg-zinc-800 rounded-xl p-5 ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <MdArrowForward />
        </div>
        <h1 className="text-3xl font-medium mt-5 ">Let's Build Together.</h1>
      </div>
      <div className="down w-full ">
        {
          start  && (
            <>
               <h1 className="text-6xl font-semibold tracking-tight leading-none">start a project</h1>
               <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">Contact Us</button>
            </>
          ) 
        }
        {para && (
 <p className="text-sm text-zinc-500 font-medium ">Design some responsive web solutions. </p>
        )}
      </div>
    </motion.div>
  );
} 

export default Card;
