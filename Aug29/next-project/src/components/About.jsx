import Pic from "../../public/pic/Pic2.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex">
      <div>
        <button className="w-28 h-8 rounded-2xl bg-slate-300 font-normal text-black text-center">
          About me
        </button>
      </div>
      <div className="flex">
        <div className=" flex mt-24">
          <Image src={Pic} width={440} height={520} />
        </div>
        <div className="text-center w-[600px] h-[364px] gap-[48px] opacity-100 flex flex-col pl-24">
          I'm a designer turned full stack developer, passionate about React.js
          and Node.js. I excel in blending technical and visual aspects to craft
          exceptional digital products, prioritizing user experience, precise
          design, and optimized code. Since starting my web development journey
          in 2015, I've embraced challenges and kept up with the latest tech
          trends. Now in my early thirties, seven years in, I'm building
          cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss,
          Supabase, and more. Since starting my web development journey in 2015,
          I've embraced challenges and kept up with the latest tech trends. Now
          in my early thirties, seven years in, I'm building cutting-edge web
          apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
          more. Finally, some quick bits about me.
          <li>B.E. in Computer Engineering</li>
          <li>B.E. in Computer Engineering</li>
          <li>B.E. in Computer Engineering</li>
          One last thing, I'm available for freelance work, so feel free to
          reach out and say hello! I promise I don't bite 😉
        </div>
      </div>
    </div>
  );
};

export default About;
