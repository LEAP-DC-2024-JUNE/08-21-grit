import PicSnap from "../Icons/Snap.png";
import Image from "next/image";

const Head = () => {
  return (
    <div className=" flex justify-center ">
      <Image src={PicSnap} width={115} height={28} />
    </div>
  );
};

export default Head;
