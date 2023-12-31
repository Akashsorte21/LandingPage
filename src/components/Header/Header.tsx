"use client";
import React, { useState } from "react";
import logo from "public/logo.png";
import Image from "next/image";
import Wrapper from "@/shared/Wrapper";
import { CgMenu } from "react-icons/cg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <header className=" py-10 select-none">
        <nav className="flex justify-between items-center mx-auto max-w-screen-xl px-10 md:px-0">
          <div>
            <div className="inline-block mr-2"></div>
            <span className="text-2xl sm:text-4xl font-mono inline-block mb-2">
              <Image
                src={logo}
                className="inline-block transform -translate-y-2 w-28 mb-5 md:mb-0 lg:w-auto"
                alt="Logo"
              />
            </span>
          </div>

          <div
            className={`nav-links bg-slate-900 md:bg-white  duration-500 md:static absolute md:min-h-fit min-h-[45vh] left-0 ${
              isMenuOpen ? "top-[11%] " : "top-[-100%]"
            } md:w-auto w-full flex justify-center text-center items-center px-5 z-20`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-y-8 ml-1 cursor-pointer">
              {/* {NavMenus.map((Menu, index) => (
                            <li key={index} onClick={(e, path) => navigateDashBoard(e, Menu.path)} className="cursor-pointer hover:text-blue-600 ">
                                <span>{Menu.title}</span>
                            </li>
                        ))} */}
              <li className="text-[#A6A6A6] lg:text-[#000000] text-lg font-medium leading-5">
                Home
              </li>
              <li className="text-[#A6A6A6] text-base font-medium leading-5 hover:text-teal-500">
                Product
              </li>
              <li className="text-[#A6A6A6] text-base font-medium leading-5 hover:text-teal-500">
                FAQ
              </li>
              <li className="text-[#A6A6A6] text-base font-medium leading-5 hover:text-teal-500">
                Blog
              </li>
              <li className="text-[#A6A6A6] text-base font-medium leading-5 hover:text-teal-500">
                About Us
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-8">
            <button className="text-[#A6A6A6] text-base font-medium leading-5 hidden md:block">
              Log In
            </button>
            <button className="text-[#F8F8FA] hidden md:block text-base font-medium leading-5 bg-[#54BD95] rounded-[10px] py-2  lg:py-3 px-3  lg:px-4">
              SignUp
            </button>
            <span
              onClick={toggleMenu}
              // name={isMenuOpen ? "close" : "menu"}
              className="text-3xl cursor-pointer md:hidden mb-10 md:mb-0 "
            >
              <CgMenu />
            </span>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};

export default Header;
