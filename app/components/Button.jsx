import { MoveUpRight } from "lucide-react";

export default function Button({ children, bgColor, link }) {
  return (
    <>
      <a
        href={link}
        className={`w-max hidden lg:flex items-center gap-3  px-4 py-2.5 border border-gray-500 rounded-full capitalize cursor-pointer hover:bg-gray-300/90 transition-all duration-200 ${bgColor}`}
      >
        {children}
      </a>
    </>
  );
}
