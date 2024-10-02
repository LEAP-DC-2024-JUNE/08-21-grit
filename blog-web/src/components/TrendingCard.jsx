import { useEffect, useState } from "react";

export const TrendingCard = ({ imgSrc, tags, title }) => {
  return (
    <div className="relative w-[280px] h-[340px]">
      <img
        src={imgSrc}
        alt={title}
        height={300}
        className=" w-full h-full rounded-2xl"
      />
      <div className="absolute bottom-0  bg-opacity-50 w-[260] text-white rounded-b-2xl px-2 mb-4 items-center">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => {
            return (
              <span className="rounded-md bg-slate-200 text-sky-600 text-center text-xs ">
                {tags}
              </span>
            );
          })}
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

  if (cards.length === 0) {
    return (
      <div className="flex justify-center mt-44 mb-44">
        <p className="text-2xl">Not found</p>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-wrap justify-center mt-20 px-10 gap-10">
        {cards.map((card) => {
          return (
            <div className=" px-2 pt-2">
              <TrendingCard
                imgSrc={card.social_image}
                title={card.title}
                tags={card.tag_list}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
