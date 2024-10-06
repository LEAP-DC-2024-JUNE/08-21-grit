import { BlogCardContainer, Trending } from "../components";
import { Header } from "../components";
import { Footer } from "../components";
import { CarouselCard } from "../components";
import { useState, useEffect } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?state=fresh&per_page=5`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const handlePlus = () => {
    setIndex((prevState) =>
      prevState == articles.length - 1 ? 0 : prevState + 1
    );
  };

  const handleMin = () => {
    if (index == 0) {
      setIndex(articles.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white text-black flex flex-col">
      <Header setInputValue={setInputValue} />

      <div>
        <CarouselCard article={articles[index]} />
        <button
          onClick={() => handlePlus()}
          className="border-2 w-10 h-10 ml-[1196px]"
        >
          +
        </button>
        <button onClick={() => handleMin()}>-</button>
      </div>
      <Trending />
      <BlogCardContainer inputValue={inputValue} />
      <Footer />
    </div>
  );
}
