import { useEffect, useState } from "react";

export const TrendingCard = ({ imgSrc, tag_list, title }) => {
  // Get the first tag from the tag_list
  const firstTag =
    Array.isArray(tag_list) && tag_list.length > 0 ? tag_list[0] : null;
  return (
    <div className="relative w-[254px] h-[320px]   ">
      <img
        src={imgSrc}
        alt={title}
        height={300}
        className=" w-full h-full rounded-2xl"
      />
      <div className="absolute bottom-0  bg-opacity-50 w-[230px] text-white rounded-b-2xl px-2 mb-4 items-center backdrop-blur-sm">
        <div className="flex flex-wrap gap-1">
          {firstTag ? (
            <span className="rounded-md bg-[#4B6BFB] text-white py-1 px-2.5 w-[100px]">
              {firstTag}
            </span>
          ) : (
            <span>No tags available</span>
          )}
        </div>
        <h1 className="mt-2 text-sm text-wrap">{title}</h1>
      </div>
    </div>
  );
};

export const Trending = () => {
  const [cards, setCards] = useState([]);

  const fetchArticles = () => {
    fetch(`https://dev.to/api/articles?tag=trending&per_page=4`)
      .then((first) => first.json())
      .then((data) => setCards(data));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="mt-20">
      <p className="text-xl font-bold pl-36 pb-2">Trending</p>
      <div className="flex flex-wrap justify-center px-10 gap-10">
        {cards.map((card) => {
          return (
            <div className=" px-2 pt-2">
              <TrendingCard
                imgSrc={card.social_image}
                title_tag={card.title_tag}
                tag_list={card.tag_list}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
