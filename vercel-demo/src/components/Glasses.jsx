import Card from "./Card";
import Img1 from "../../public/img1.png";
import Img2 from "../../public/img2.png";

const Glasses = () => {
  return (
    <div className="flex flex-col mt-16 ml-8">
      <div>Recommended Products</div>
      <div>
        <div className="flex flex-row gap-4">
          <div>
            <Card imgSrc={Img1} title="Burnikk" description="Sexbomb" />
          </div>
          <div>
            <Card imgSrc={Img2} title="Kibal Batal" description="Kibal Black" />
          </div>
          <div>
            <Card imgSrc={Img1} title="Very Nice" description="Salt maalat" />
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div>
            <Card imgSrc={Img1} title="Burnikk" description="Sexbomb" />
          </div>
          <div>
            <Card imgSrc={Img2} title="Kibal Batal" description="Kibal Black" />
          </div>
          <div>
            <Card imgSrc={Img1} title="Very Nice" description="Salt maalat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glasses;
