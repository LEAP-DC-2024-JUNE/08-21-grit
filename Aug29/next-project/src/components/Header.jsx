// import React from "react";
import Pic1 from "../../public/pic/Pic.png";
import Image from "next/image";
import IconLoc from "../Icons/iconloc.png";
import IconDot from "../Icons/Icondot.png";
import IconLinks from "../Icons/Links.png";

const Header = () => {
  return (
    <div className="flex flex-row items-center pt-16 ">
      <div className="text-center w-[600px] h-[364px] gap-[20px] opacity-100 flex flex-col pl-24 pt-4 ml-16 mr-60">
        <h2 className="text-3xl font-bold pt-12 leading-relaxed">
          Hi, I'm Suvdaa
        </h2>
        <p className="text-gray-700 ">
          I specialize in full stack development, with a strong focus on
          React.js and Next.js. My main goal is to create exceptional digital
          experiences that are fast, visually appealing, and accessible to
          everyone. I find joy in crafting innovative solutions and designs that
          stand out and deliver real value.
        </p>
        <div>
          <div className="flex align ">
            {" "}
            <Image src={IconLoc} width={24} height={24} />
            <p> Arlington, Virginia</p>
          </div>
          <div className="flex align">
            {" "}
            <Image src={IconDot} width={24} height={24} />
            <p> Available for new projects</p>
          </div>
          <div className="pt-4">
            <Image src={IconLinks} width={116} height={36} />
          </div>
        </div>
      </div>
      <div className="flex mt-16 ">
        <Image
          className="rounded-sm shadow-sm"
          src={Pic1}
          alt="A descriptive alt text" // Always include alt text
          width={400} // Set the width of the image
          height={480} // Set the height of the image
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <header className="flex flex-col h-screen w-screen">
//       <div>
//         <h1>Hi, I'm Suvdaa</h1>
//         <p className="font-normal text-base text-gray-600">
//           I specialize in full stack development, particularly with React.js and
//           Node.js. My main goal is to create exceptional digital experiences
//           that are fast, visually appealing, and accessible to everyone. With
//           over 7 years of experience in web development, I continue to find joy
//           in crafting innovative solutions and designs.
//         </p>
//       </div>
//       <div>
//         <img src={Pic} />
//       </div>
//     </header>
//   );
// };

// export default Header;
