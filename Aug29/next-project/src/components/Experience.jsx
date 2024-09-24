import Image from "next/image";
import LogoE from "../Icons/logoUpwork.png";
import Card2 from "../components/CardExperience";
import { useTheme } from "next-themes";

// import Upwork from "../svg/Logo-Upwork";

const Experience = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className="w-full px-[16px] py-[64px] lg:py-[96px] lg:px-[80px] lg:justify-center bg-[#F9FAFB] dark:bg-[#111827] dark:text-white">
      <div className=" flex flex-col gap-[24px] lg:gap-[48px] lg:px-[32px] items-center ">
        <button className="w-[105px] h-[28px] rounded-[12px] bg-[#E5E7EB] font-normal text-black text-center dark:bg-[#374151] ">
          Experience
        </button>
        <div className="text-center mb-4">
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
      </div>

      <section className="space-y-8 dark:bg-[#111827]">
        <Card2
          img
          src={LogoE}
          title="Sr. Frontend Developer"
          description={[
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>,

            <div>
              Ut pretium arcu et massa semper, id fringilla leo semper.
            </div>,

            <div>Sed quis justo ac magna.</div>,

            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>,
          ]}
          time="Nov 2021 - Present"
        />
        <Card2
          img
          src={LogoE}
          title="Team Lead"
          description={[
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>,

            <div>
              Ut pretium arcu et massa semper, id fringilla leo semper.
            </div>,

            <div>Sed quis justo ac magna.</div>,

            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>,
          ]}
          time="Nov 2021 - Present"
        />
        <Card2
          img
          src={LogoE}
          title="Full Stack Developer"
          description={[
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>,

            <div>
              Ut pretium arcu et massa semper, id fringilla leo semper.
            </div>,

            <div>Sed quis justo ac magna.</div>,

            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>,
          ]}
          time="Nov 2021 - Present"
        />
      </section>
    </div>
  );
};

export default Experience;
