import { FooterIcons } from "./FooterIcons";
import { FooterLogo } from "./FooterLogo";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-gray-200 px-10">
      <div className="px-16 flex justify-between">
        <div className="w-[280px] text-gray-500 italic mt-10 ">
          <p className="font-bold pb-2">About</p>
          <p className=" mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="pt-1">Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>
        <div className="mt-10 text-gray-500 w-[50px] flex italic hover:not-italic ">
          <Link
            href="/"
            className="px-4 hover:text-gray-500 hover:cursor-pointer"
          >
            Home
          </Link>

          <Link
            href="/blog"
            className="px-4 hover:text-gray-500 hover:cursor-pointer"
          >
            Blog
          </Link>

          <Link
            href="/contact-us"
            className="px-4 hover:text-gray-500 hover:cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <div className="mt-10">
          <FooterIcons />
        </div>
      </div>
      <div className="mt-10 pl-10 flex justify-between gap-10 mb-10 border-t-2 border-gray-300 ">
        <FooterLogo />
        <div className="flex gap-10 mt-2 text-gray-500">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
