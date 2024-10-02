import { BlogCard } from "../components";
import { useEffect, useState } from "react";

export const BlogCardContainer = ({ inputValue }) => {
  const [cards, setCards] = useState([]);
  const [load, setLoad] = useState(9);

  const fetchArticles = () => {
    fetch(`https://dev.to/api/articles?per_page=${load}`)
      .then((first) => first.json())
      .then((data) => setCards(data));
  };
  // callback function ashiglaval:
  // const fetchingDataInUseEffect = () => {
  //   fetchData()
  // };

  // useEffect(fetchingDataInUseEffect, []);

  useEffect(() => {
    fetchArticles();
  }, [load]);

  const filteredcards = cards.filter((card) =>
    card.title.toLowerCase().includes(inputValue.toLowerCase())
  );
  const loadMore = () => {
    setLoad(load + 3);
  };

  if (filteredcards.length == 0)
    return (
      <div className="flex justify-center mt-44 mb-44">
        <p className="text-2xl">Not found</p>
      </div>
    );
  return (
    <div>
      <p className="mt-20 pl-36 font-black">All Blog Post</p>
      <div className="flex gap-10 pl-40 pt-10">
        <button>All</button>
        <button>Design</button>
        <button>Travel</button>
        <button>Fashion</button>
        <button>Technology</button>
        <button>Branding</button>
      </div>
      <div className="flex flex-wrap justify-center mt-20 px-10 gap-10">
        {filteredcards.map((card) => {
          return (
            <div className="border-2 px-2 pt-2">
              <BlogCard
                imgSrc={card.social_image}
                username={card.user.username}
                title={card.title}
                description={card.description}
                tags={card.tag_list}
                date={card.readable_publish_date}
              />
            </div>
          );
        })}
        <button
          onClick={loadMore}
          className=" mt-16 mr-40 border-2 border-color-[#696A754D] w-[96px] h-[40px] hover:border-purple-600 text-center items-center mb-20"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
