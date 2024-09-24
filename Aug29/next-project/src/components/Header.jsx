// import React from "react";
import Pic1 from "../../public/pic/Pic.png";
import Image from "next/image";
import IconLoc from "../Icons/iconloc.png";
import IconLoc1 from "../Icons/IconDarkLoc.png";
import IconDot from "../Icons/Icondot.png";
import IconLinks from "../Icons/Links.png";
import IconLinks1 from "../Icons/Links-Dark.png";
import { useTheme } from "next-themes";

const Header = () => {
  const { setTheme, theme } = useTheme();
  return (
    <section className="grid gap-8 md:grid-cols-2 px-[64px] py-[16px] md:h-[364] md:px-[96px] md:py-[80px] md:items-center md:text-left md:justify-items-end  ">
      <div className=" md:order-last md:pl-[32px]">
        <Image
          class=" rounded-lg border-[8px] border-color-[#ffffff] "
          src={Pic1}
          width={360}
          height={300}
          alt="pic"
          layout="intrinsic"
        />
      </div>
      <div className="md:pr-[32px]">
        <div className="text-4xl font-bold mb-2">Hi, I'm Suvdaa</div>
        {theme == "dark" ? (
          <p className="text-white gap-[8px]">
            I specialize in full stack development, with a strong focus on
            React.js and Next.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. I find joy in crafting innovative solutions and designs
            that stand out and deliver real value.
          </p>
        ) : (
          <p className="text-gray-700 gap-[8px]">
            I specialize in full stack development, with a strong focus on
            React.js and Next.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. I find joy in crafting innovative solutions and designs
            that stand out and deliver real value.
          </p>
        )}

        <div>
          <div className="flex mt-[36px] ">
            {theme == "dark" ? (
              <Image src={IconLoc1} width={24} height={24} />
            ) : (
              <Image src={IconLoc} width={24} height={24} />
            )}

            <p> Arlington, Virginia</p>
          </div>
          <div className="flex align">
            <Image src={IconDot} width={24} height={24} />
            <p> Available for new projects</p>
          </div>
        </div>
        <div className="mt-[8px]">
          {theme == "dark" ? (
            <Image src={IconLinks1} width={116} height={36} />
          ) : (
            <Image src={IconLinks} width={116} height={36} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
