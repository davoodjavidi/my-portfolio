"use client";
import { CodeXml, Earth, FileDown, MoveRight, SquareCode } from "lucide-react";
import { motion, spring } from "motion/react";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col text-center mx-auto items-center justify-center h-screen w-11/12">
      <motion.div
        className="flex flex-col justify-center items-center gap-3"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, type: spring, stiffness: 100 }}
      >
        <div>
          <SquareCode className="size-20 text-violet-900" />
        </div>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="capitalize text-xl font-semibold"
        >
          hi, i&apos;m davood javidi
        </motion.h1>
        <h1 className="capitalize font-semibold flex items-center gap-2 text-4xl">
          frontend web developer <CodeXml className="text-rose-700" />
        </h1>
        <h1 className="text-3xl font-semibold flex items-center gap-2">
          based in iran <Earth className="text-rose-700" />
        </h1>
        <p>im a 32 years old programer with over 5 years of experience</p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className={`w-max bg-fuchsia-400 flex items-center gap-2 px-6 py-4 border border-gray-500 rounded-full capitalize cursor-pointer hover:bg-gray-300/90 transition-all duration-200 `}
        >
          Contact Me
          <MoveRight className="size-5" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          className={`w-max flex items-center gap-2 px-6 py-4 border border-gray-500 rounded-full capitalize cursor-pointer hover:bg-gray-300/90 transition-all duration-200 `}
        >
          My resume <FileDown />
        </motion.a>
      </div>
    </div>
  );
}
