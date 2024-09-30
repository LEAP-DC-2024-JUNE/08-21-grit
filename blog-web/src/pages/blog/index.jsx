import { BlogCard, Header, Footer } from "@/components";
import { BlogCardContainer } from "@/components/BlogCardContainer";
import { useEffect, useState } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const fetchData = () => {
    // fetch("https://dev.to/api/articles?per_page=9")
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(articles);
  const filteredArticles = articles.filter((article) => {});
  return (
    <div className="flex flex-wrap">
      <Header setInputValue={setInputValue} />
      {articles.map((article) => {
        return (
          <BlogCardContainer
            img={article.social_image}
            tags={article.type_of}
            title={article.title}
            userName={article.user.name}
            date={article.readable_publish_date}
          />
        );
      })}
    </div>
  );
};
export default Blog;
