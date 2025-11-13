"use client";
import { assets } from "@/assets/assets";
import { CircleX, Menu, Moon, MoveUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function hanleMenuButton() {
    setIsOpenMenu((isOpenMenu) => !isOpenMenu);
  }

  function handleCloseButton() {
    setIsOpenMenu(false);
  }

  return (
    <>
      <div>
        <Image
          src={assets.header_bg_color}
          alt="background of header"
          className="fixed top-0 right-0 -z-10 translate-y-[-90%]"
        />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[10%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            alt="davood javidi portfolio"
            className="w-28 mr-14 cursor-pointer"
          />
        </a>

        <ul
          className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/90
        shadow-sm font-semibold"
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* <button>
            <Moon className="size-6 hover:text-gray-600" />
          </button> */}

          {/* <Button bgColor="bg-fuchsia-400" link="#contact">
            contact me <MoveUpRight className="size-5" />
          </Button> */}

          <a
            href="#contact"
            className="w-max hidden lg:flex bg-violet-900 text-gray-100 items-center gap-2 px-6 py-4 border border-gray-500 rounded-full capitalize cursor-pointer hover:bg-gray-300 transition-all hover:text-black duration-300"
          >
            Contact Me
          </a>
          <button className="block md:hidden" onClick={hanleMenuButton}>
            <Menu />
          </button>

          {/* mobile menu */}

          <ul
            className={`md:hidden flex flex-col w-64 bg-gray-500 h-screen fixed gap-4 py-20 px-10 top-0 bottom-0  text-gray-100 transition-all duration-500 ${
              isOpenMenu ? "right-0" : "-right-64"
            }`}
          >
            <button
              className="absolute right-5 top-5"
              onClick={handleCloseButton}
            >
              <CircleX />
            </button>
            <li>
              <a href="#top" onClick={handleCloseButton}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleCloseButton}>
                About me
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleCloseButton}>
                Services
              </a>
            </li>
            <li>
              <a href="#work" onClick={handleCloseButton}>
                My work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleCloseButton}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
