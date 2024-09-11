import Pic from "../../public/pic/Pic2.png";
import Image from "next/image";

const About = () => {
  return (
    <div className=" mt-16 bg-slate-100">
      <div className=" flex justify-center">
        <button className="w-28 mt-8 h-8 rounded-2xl bg-slate-300 font-normal text-black text-center">
          About me
        </button>
      </div>
      <div className="flex">
        <div className=" flex mt-16 ml-40 pb-16">
          <Image
            className="rounded-sm shadow-sm px-4 py-4"
            src={Pic}
            width={480}
            height={400}
          />
        </div>
        <div className="text-center w-[600px] h-[364px] opacity-100 flex flex-col pl-20 ml-16 mr-16 mt-24 gap-16 my-8">
          <p lassName="text-gray-700">
            I'm a full stack developer with a passion for React.js and Node.js.
            I specialize in using HTML, CSS, React.js, and Next.js to create
            exceptional digital experiences. By leveraging Tailwind CSS and
            optimizing code for performance, I focus on building user- friendly,
            visually appealing, and functional web apps. Since starting my
            development journey in 2021, I’ve embraced new challenges and kept
            up with the latest tech trends.
          </p>
          <p>
            I’m available for freelance work, so feel free to reach out and say
            hello! I promise I don’t bite.😉
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
