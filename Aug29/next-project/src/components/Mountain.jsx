import Image from "next/image";
import Pic1 from "../Icons/pic1.png.jpeg";
import Pic2 from "../Icons/pic2.png";
import Pic3 from "../Icons/pic3.png.jpeg";

const Mountain = () => {
  return (
    <div>
      <p className="flex justify-center">Mountain Pictures</p>
      <div className=" flex justify-center ">
        <Image src={Pic1} width={200} height={160} />
        <Image src={Pic2} width={200} height={160} />
        <Image src={Pic3} width={200} height={160} />
        <Image src={Pic1} width={200} height={160} />
      </div>
    </div>
  );
};

export default Mountain;
