"use client";

import { serviceData } from "@/assets/assets";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl text-center"
      >
        What i offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-semibold text-4xl text-center my-4"
      >
        My Services
      </motion.h2>
      <p className="text-center max-w-2xl mx-auto">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>

      <div>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full mt-10"
        >
          {serviceData.map((service) => (
            <motion.li
              whileHover={{ scale: 1.02 }}
              key={service.title}
              className="flex flex-col aspect-square bg-white px-6 py-10 rounded-xl hover:-translate-y-1 hover:bg-fuchsia-100/70 transition-all duration-300 cursor-pointer border-[0.5px] border-gray-400 hover:shadow-[2px_4px_0px_black] max-w-xl"
            >
              <Image
                src={service.icon}
                alt={service.description}
                className="w-12"
              />
              <h2 className="text-xl font-semibold my-4">{service.title}</h2>
              <p>{service.description}</p>
              <a
                href={service.link}
                className="flex items-center gap-2 my-4 hover:text-blue-400"
              >
                Read More <MoveRight className="size-4" />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
