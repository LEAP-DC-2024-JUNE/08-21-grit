import Pic from "../../public/pic/Pic2.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const About = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className="dark:bg-[#1F2937] bg-gray-50">
      <div className=" flex flex-col items-center ">
        <button className="w-[105px] h-[28px] rounded-[12px] bg-[#E5E7EB] items-center font-normal text-black text-center mt-12 dark:bg-[#CBD5E1] ">
          About me
        </button>
      </div>
      <section className="grid gap-8 md:grid-cols-2 px-[64px] py-[16px] md:h-[364] md:px-[96px] md:py-[80px] md:items-center md:text-center md:justify-items-start  ">
        <div>
          <Image
            class=" rounded-lg border-[8px] border-color-[#ffffff] "
            src={Pic}
            width={320}
            height={300}
            alt="pic"
            layout="intrinsic"
          />
        </div>

        <div className="md:pr-[32px]">
          <p className="text-3xl dark:text-white text-[#111827] font-bold mb-2">
            Curious about me? Here you have it:
          </p>
          <p className="text-gray-700 gap-[8px] dark:text-white">
            I'm a full stack developer with a passion for React.js and Node.js.
            I specialize in using HTML, CSS, React.js, and Next.js to create
            exceptional digital experiences.By leveraging Tailwind CSS and
            optimizing code for performance, I focus on building user- friendly,
            visually appealing, and functional web apps. Since starting my
            development journey in 2021, I’ve embraced new challenges and kept
            up with the latest tech trends.
          </p>
          <p className="text-[#4B5563] dark:text-white">
            I’m available for freelance work, so feel free to reach out and say
            hello! I promise I don’t bite.😉
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
