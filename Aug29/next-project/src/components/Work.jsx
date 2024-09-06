import Card from "./Card.Work";
import Ubcab from "../Icons/Ubcab.png";
import Mentorhub from "../Icons/Mentorhub.png";
import iToim from "../Icons/iToim.png";

const Work = () => {
  return (
    <div className="flex flex-col items-center">
      <Card
        imgSrc={Ubcab}
        title="UBCab"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante 
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
            curae."
      />
      <Card
        imgSrc={Mentorhub}
        title="MentorHub"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum 
            ante ipsum primis in faucibus orci luctus et ultrices posuere 
            cubilia curae."
        reverse={true}
      />
      <Card
        imgSrc={iToim}
        title="iToim"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum 
            ante ipsum primis in faucibus orci luctus et ultrices posuere 
            cubilia curae."
      />
    </div>
  );
};

export default Work;
