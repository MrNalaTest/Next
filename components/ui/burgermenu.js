"use client";

import { useState } from "react";
import "../../app/globals.css";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative">
      <button
        onClick={toggleMenu}
        className={`fixed top-0 left-1 w-12 h-12 rounded-full flex flex-col justify-center items-center transition-all duration-300 bg-transparent md:hidden ${
          isOpen ? "bg-black" : ""
        }`}
        aria-label="Open Menu Button"
      >
        <span
          className={`block w-8 h-[3px] bg-black dark:bg-white rounded transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-[3px] bg-black dark:bg-white rounded mt-1 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-[3px] bg-black dark:bg-white rounded mt-1 transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        ></span>
      </button>

      <nav
        className={`fixed top-12 right-0 w-[250px] h-full bg-black-800 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="$ backdrop-blur-md bg-black/85 rounded-md">
          <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-zinc-800">Contact us</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-zinc-800">Introduction</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-zinc-800">Installation</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-zinc-800">Typography</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-zinc-800">Alert Dialog</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-zinc-800">Progress</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-zinc-800">Scroll area</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-zinc-800">Tabs</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-zinc-800">Tooltip</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer hover:bg-zinc-800">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
