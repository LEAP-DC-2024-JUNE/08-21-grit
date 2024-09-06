// import React from "react";
import Pic1 from "../../public/pic/Pic.png";
import Image from "next/image";
import IconLoc from "../Icons/iconloc.png";
import IconDot from "../Icons/Icondot.png";
import IconLinks from "../Icons/Links.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 space-y-4 flex-1 justify-between ">
      <div className="text-center w-[600px] h-[364px] gap-[48px] opacity-100 flex flex-col pl-24">
        <h2 className="text-3xl font-bold pt-12 leading-relaxed">
          Hi, I'm Suvdaa
        </h2>
        <p className="text-gray-700 ">
          I specialize in full stack development, particularly with React.js and
          // Node.js. My main goal is to create exceptional digital experiences
          // that are fast, visually appealing, and accessible to everyone. With
          // over 7 years of experience in web development, I continue to find
          joy // in crafting innovative solutions and designs.
        </p>
        <div>
          <div className="flex align ">
            {" "}
            <Image src={IconLoc} width={24} height={24} />
            <p> Ulaanbaatar, Mongolia</p>
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
      <div className="flex  pl-40 pr-40 w-150 h-91 pt-20">
        <Image
          src={Pic1}
          alt="A descriptive alt text" // Always include alt text
          width={320} // Set the width of the image
          height={360} // Set the height of the image
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
