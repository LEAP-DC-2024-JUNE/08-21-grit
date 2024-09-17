// import React from "react";
import Image from "next/image";
import Logo from "../Icons/logo.png";
import Link from "next/link";
import Icon from "../Icons/Icon.png";
import Icon1 from "../Icons/IconMenu.png";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "About" },
  { name: "Work" },
  { name: "Testimonials" },
  { name: "Contact" },
];

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <nav className=" flex w-[1440px] h-[68px] justify-between px-[16px] py-[16px] items-center	lg:container lg:mx-auto lg:px-[32px] ">
      <div>
        <p className="text-4xl text-gray-800 font-bold">Suvd</p>
      </div>
      <div className="lg:hidden md:hidden">
        <Image
          src={Icon1}
          alt="IconMenu"
          width="24"
          height="24"
          className="cursor-pointer"
          priority
        />
      </div>

      <div className="hidden lg:flex items-center flex-col">
        <div className=" flex ml-6 gap-6">
          {navLinks.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
          <div>
            <button onClick={toggleTheme}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 ml-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>
          </div>

          <button className="w-[136px] h-[36px] rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
