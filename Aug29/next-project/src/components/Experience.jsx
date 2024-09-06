import Image from "next/image";
import Tag from "../Icons/tag.png";
import LogoUp from "../Icons/logoUpwork.png";

const Experience = () => {
  return (
    <div className="items-center">
      <div className=" flex justify-center ">
        <Image src={Tag} width={115} height={28} />
      </div>
      <div>
        <div className="text-center">
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="flex gap-12 p-8 bg-white shadow-sm ml-16 mt-16">
          <div>
            <Image src={LogoUp} width={102} height={28} />
          </div>
          <div>
            <h2>Sr. Frontend Developer</h2>
            <p>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </p>
          </div>
          <div>Nov 2021 - Present</div>
        </div>
      </div>
      <div className=" flex justify-center ">
        <Image src={Tag} width={115} height={28} />
      </div>
      <div>
        <div className="text-center">
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="flex gap-12 p-8 bg-white shadow-sm ml-16 mt-16">
          <div>
            <Image src={LogoUp} width={102} height={28} />
          </div>
          <div>
            <h2>Sr. Frontend Developer</h2>
            <p>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </p>
          </div>
          <div>Nov 2021 - Present</div>
        </div>
      </div>
      <div className=" flex justify-center ">
        <Image src={Tag} width={115} height={28} />
      </div>
      <div>
        <div className="text-center">
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="flex gap-12 p-8 bg-white shadow-sm ml-16 mt-16">
          <div>
            <Image src={LogoUp} width={102} height={28} />
          </div>
          <div>
            <h2>Sr. Frontend Developer</h2>
            <p>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </p>
          </div>
          <div>Nov 2021 - Present</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
