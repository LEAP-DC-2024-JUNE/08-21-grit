import Image from "next/image";

const Card = (props) => {
  const { imgSrc, title, description } = props;

  return (
    <div>
      <div>{<Image src={imgSrc} width={300} height={200} />}</div>

      <div>
        <div>{title}</div>
      </div>

      <div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Card;
