import Image from "next/image";
import LogoUp from "../Icons/logoUpwork.png";

const Experience = () => {
  return (
    <div className=" md:h-[400px] md:items-center  mt-16 md:bg-slate-100">
      <div className=" flex justify-center ">
        <button className="w-28 h-8 rounded-2xl mt-8 bg-slate-300 font-normal text-black text-center">
          Experience
        </button>
      </div>
      {/* <section>
        <div className="text-center pt-6">
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="flex h-[180px] gap-12 pb-0 mb-4 ml-28 mt-8 bg-white mr-28 items-center justify-center">
          <div>
            <Image src={LogoUp} width={102} height={28} />
          </div>
          <div>
            <h2>Sr. Frontend Developer</h2>
            <div>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </div>
          </div>
          <div>
            <p>Nov 2021 - Present</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Experience;
