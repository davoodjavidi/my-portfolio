"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 h-full"
    >
      <h4 className="text-center mb-2 text-xl">Introduction</h4>
      <motion.h2
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-center text-4xl font-semibold"
      >
        About Me
      </motion.h2>

      <div className="w-full flex flex-col lg:flex-row items-center gap-20 my-10">
        {/* <div className="w-64 md:w-80 rounded-3xl">
          <Image src={assets.user_image} alt="Davood Javidi" />
        </div> */}
        <div className="mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl my-2">
            {infoList.map((info) => (
              <li
                key={info.title}
                className="bg-white p-6 border-[0.5px] rounded-xl border-gray-400 mt-2 cursor-pointer hover:bg-fuchsia-100/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[2px_4px_0px_black]"
              >
                <Image src={info.icon} alt={info.description} className="w-7" />
                <h3 className="font-semibold text-gray-700 my-4">
                  {info.title}
                </h3>
                <p className="text-sm">{info.description}</p>
              </li>
            ))}
          </ul>

          <h3 className="font-semibold mt-5 mb-1">English Level</h3>
          <p className=" max-w-2xl">
            PTE Academic Score: 84/90 - Expert Level English Proficiency
            (Achieved-2025)
          </p>

          <motion.h4
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 1.2, duration: 0.3 }}
            className="text-xl text-gray-700 font-semibold mt-4"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 2, duration: 0.3 }}
            className="flex gap-3 my-4 items-center sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.2 }}
                key={index}
                className=" w-12 flex items-center justify-around aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500 hover:bg-violet-100"
              >
                <Image
                  src={tool}
                  alt="tool"
                  className="w-5 sm:w-7 hover:translate-y-1 duration-700"
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}
