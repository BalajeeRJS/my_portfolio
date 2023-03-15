import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#home" className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
        RJS BALAJEE
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-white bg-gray-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded">
            Projects
          </a>
          <a href="#skills" className="mr-5 text-white bg-gray-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded">
            Skills
          </a>
          
          <a  href="https://www.linkedin.com/in/rjs-balajee-389a8215a/" target="_blank" rel="noopener noreferrer" className="mr-5 text-white bg-gray-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded">
            <span><i className="fa fa-linkedin-square lsym" ></i></span> Linkedin
          </a>
          
          <a  href="https://github.com/BalajeeRJS" target="_blank" rel="noopener noreferrer" className="mr-5 text-white bg-gray-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded">
            <span><i className="fa fa-github lsym"></i></span> GitHub
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}