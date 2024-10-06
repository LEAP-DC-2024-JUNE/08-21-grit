export const CarouselCard = ({ article }) => {
  if (!article) {
    return null;
  }
  return (
    <div className="w-full h-full px-40 justify-center relative">
      <img
        className="rounded-xl"
        height={620}
        width={1200}
        src={article.social_image}
        alt=""
      />
      <div className="absolute bottom-2 ml-2 h-[200px]  bg-opacity-100 w-[598px] bg-white text-black rounded-2xl">
        <div className="p-10 gap-4">
          <span className="rounded-md bg-[#4B6BFB] text-white py-2 px-2.5 w-[100px]">
            Technology
          </span>
          <p className="font-extrabold text-2xl py-2">{article.title}</p>
          <p className="pt-2 text-gray-500">{article.readable_publish_date}</p>
        </div>
      </div>
    </div>
  );
};
