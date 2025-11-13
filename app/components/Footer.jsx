import { assets } from "@/assets/assets";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="pb-6">
      <div className="border-b-2 border-gray-400 max-w-md md:max-w-7xl pb-8 mx-auto">
        <Image
          src={assets.logo}
          alt="davood javidi portfolio"
          className="mb-2 mx-auto w-36"
        />
        <div className="flex gap-2 items-center mx-auto w-full justify-center text-gray-600">
          <Mail className="w-5" />
          <p className="font-semibold text-sm">javididavid1993@gmail.com</p>
        </div>
      </div>
      <div className="text-center sm:flex justify-between items-center max-w-7xl mx-auto mt-4 gap-2">
        <p className="text-sm text-gray-500 text-center md:text-left">
          © 2025 Davood Javidi. All rights reserved.
        </p>
        <ul className="flex gap-6 text-sm text-gray-700 font-semibold justify-center items-center mt-2 md:mt-0">
          <li>
            <a href="https://github.com/davoodjavidi" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
