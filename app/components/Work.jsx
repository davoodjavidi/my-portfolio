"use client";
import { workData } from "@/assets/assets";
import { ArrowRight, CircleFadingArrowUp } from "lucide-react";
import { motion } from "motion/react";
export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      id="work"
      className="px-[12%] py-10 bg-gray-200 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center m-2 text-xl"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-4xl font-semibold my-4"
      >
        My latest Work
      </motion.h2>
      <p className="text-center max-w-2xl mx-auto">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {workData.map((work) => (
          <div
            key={work.title}
            className="aspect-square bg-cover rounded-lg bg-center bg-no-repeat relative group cursor-pointer shadow my-10"
            style={{ backgroundImage: `url(${work.bgImage})` }}
          >
            <div className="bg-white px-2 py-3 flex justify-around items-center w-10/12 rounded-lg absolute bottom-5 left-2 gap-4 group-hover:bottom-6 transition-all duration-300 group-hover:bg-gray-100">
              <div className="flex-col">
                <h2 className="text-md font-semibold ">{work.title}</h2>
                <p className="text-sm text-gray-700">{work.description}</p>
              </div>

              <div>
                <CircleFadingArrowUp className="group-hover:text-fuchsia-600" />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <a
          href="#contact"
          className={`w-max bg-gray-800 text-white flex items-center gap-2 px-6 py-4 border border-gray-500 rounded-full capitalize cursor-pointer hover:bg-gray-600  transition-all duration-200 `}
        >
          Show more
          <ArrowRight className="size-5" />
        </a>
      </motion.div>
    </motion.div>
  );
}
