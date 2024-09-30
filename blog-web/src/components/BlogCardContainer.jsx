import { BlogCard } from "./BlogCard";
// import { useEffect, useState } from "react";

export const BlogCardContainer = ({ articles = [], inputValue }) => {
  const filteredArticle = articles.filter((article) => {
    let inputValueLower = inputValue.toLowerCase();
    let articleTitle = article.title.toLowerCase();
    return articleTitle.includes(inputValueLower);
  });
  console.log(articles);
  return (
    <div className="w-full">
      <div className="px-[160px] py-[20px] text-xl font-extrabold">
        All Blog Post
      </div>
      <div className="grid grid-cols-3 gap-3 px-[352px]">
        {filteredArticle.map((article) => {
          return (
            <div>
              <BlogCard
              // img={article.social_image}
              // tags={article.tags}
              // title={article.title}
              // userName={article.user.name}
              // date={article.readable_publish_date}
              // key={index}
              />
            </div>
          );
        })}
      </div>
      <div>
        <button className="border-2">Load More</button>
      </div>
    </div>
  );
};
