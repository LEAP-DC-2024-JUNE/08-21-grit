// import React from "react";
import Image from "next/image";
import Logo from "../Icons/logo.png";
import Link from "next/link";
import Icon from "../Icons/Icon.png";

const Navbar = () => {
  return (
    <nav className=" fixed w-full h-20 shadow-sm bg-white	">
      <div className="flex justify-between items-center h-full w-full px-20 2xl:px-16">
        <Link href="/test">
          <Image
            src={Logo}
            alt="Logo"
            width="65"
            height=""
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="ml-80">
          <ul className="flex">
            <li className=" ml-10 hover:borderb text-pretty">About</li>
            <li className=" ml-10 hover:borderb text-pretty">Work</li>
            <li className=" ml-10 hover:borderb text-pretty">Testimonials</li>
            <li className=" ml-10 hover:borderb text-pretty">Contact</li>
          </ul>
        </div>
        <Image
          src={Icon}
          alt="Icon"
          width="24"
          height="24"
          className="cursor-pointer"
          priority
        />
        <button className="w-36 h-9 rounded-xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 bg-[#111827] font-medium text-white  ">
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
