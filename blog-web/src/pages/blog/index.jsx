import { BlogCardContainer } from "../../components";
import { Header } from "../../components";
import { useState } from "react";
import { Footer } from "../../components";

const Blog = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="bg-white text-black flex flex-col">
      <Header setInputValue={setInputValue} />
      <BlogCardContainer inputValue={inputValue} />
      <Footer />
    </div>
  );
};

export default Blog;
