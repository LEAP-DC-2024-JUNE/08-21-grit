import { BlogCard } from "../components";
import { useEffect, useState } from "react";

export const BlogCardContainer = ({ inputValue }) => {
  const [cards, setCards] = useState([]);
  const [load, setLoad] = useState(9);
  const [category, setCategory] = useState("");

  const fetchArticles = () => {
    fetch(`https://dev.to/api/articles?per_page=${load}&tag=${category}`)
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
  }, [load, category]);

  const filteredcards = cards.filter((card) =>
    card.title.toLowerCase().includes(inputValue.toLowerCase())
  );
  const loadMore = () => {
    setLoad(load + 3);
  };
  const filteredCategory = (param1) => {
    setCategory(param1);
  };

  if (filteredcards.length == 0)
    return (
      <div className="flex justify-center mt-44 mb-44">
        <p className="text-2xl">Not found</p>
      </div>
    );
  return (
    <div>
      <p className="mt-20 pl-36 text-xl font-bold">All Blog Post</p>
      <div className="italic hover:not-italic flex gap-10 pl-40 pt-10">
        <span
          onClick={() => filteredCategory("/")}
          className="hover:text-gray-500 hover:cursor-pointer"
        >
          All
        </span>
        <span
          onClick={() => filteredCategory("javascript")}
          className="hover:text-gray-500 hover:cursor-pointer"
        >
          Javascript
        </span>
        <span
          onClick={() => filteredCategory("css")}
          className="hover:text-gray-500 hover:cursor-pointer"
        >
          Css
        </span>
        <span
          onClick={() => filteredCategory("nextjs")}
          className="hover:text-gray-500 hover:cursor-pointer"
        >
          Next.js
        </span>
        <span
          onClick={() => filteredCategory("technology")}
          className="hover:text-gray-500 hover:cursor-pointer"
        >
          Technology
        </span>
        <span
          onClick={() => filteredCategory("branding")}
          className="hover:text-gray-500 hover:cursor-pointer"
        >
          Branding
        </span>
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
                tag_list={card.tag_list}
                date={card.readable_publish_date}
                id={card.id}
              />
            </div>
          );
        })}
        <button
          onClick={loadMore}
          className=" mt-16 mr-40 border-2 rounded-lg border-color-[#696A754D] w-[96px] h-[40px] hover:border-gray-500 text-center items-center mb-20"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
