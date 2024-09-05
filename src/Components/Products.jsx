import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assets/arqitel.mp4"
import ttr from "../assets/ttr.mp4"
import yir from "../assets/yir.mp4"
import yahoo from "../assets/yahoo.mp4"
function Products() {
  var products = [
    {
      title: "Arqitel",
      description: "This is a product with a description which will help more!",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description: "This is a product with a description which will help more!",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description: "This is a product with a description which will help more!",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description: "This is a product with a description which will help more!",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[45%]  overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "

          >
            <video
              className="absolute object-cover rounded-4xl"
              autoPlay
              muted
              loop
              src={arqitel}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200"
          >
              <video
              className="absolute object-cover rounded-4xl"
              autoPlay
              muted
              loop
              src={ttr}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          >
             <video
              className="absolute object-cover rounded-4xl"
              autoPlay
              muted
              loop
              src={yir}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          >
             <video
              className="absolute object-cover rounded-4xl"
              autoPlay
              muted
              loop
              src={yahoo}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
