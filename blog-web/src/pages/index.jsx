// import {
//   Header,
//   Footer,
//   CarouselCard,
//   TrendingCard,
//   BlogCard,
// } from "../components";

// export default function Home() {
//   return (
//     <div>
//       <Header />
//       <BlogCard />
//       <CarouselCard />
//       <Footer />
//       <TrendingCard />
//     </div>
//   );
//

import { BlogCardContainer, Trending } from "../components";
import { Header } from "@/components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { CarouselCard } from "@/components";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="bg-white text-black flex flex-col">
      <Header setInputValue={setInputValue} />
      <CarouselCard />
      <Trending />
      <BlogCardContainer inputValue={inputValue} />
      <Footer />
    </div>
  );
}

// // import { useState } from "react";
// // import { BlogCardContainer } from "@/components/BlogCardContainer";
// // import { Header, Footer } from "@/components";

// // export default function Home() {
// //   const [inputValue, setInputValue] = useState("");
// // const fetchData = () => {
// //   fetch(`https://dev.to/api/articles?per_page=${count}`)
// //     .then((response) => response.json())
// //     .then((data) => setArticles(data));
// // };
// // const [count, setCount] = useState(9);
// // useEffect(() => {
// //   fetchData();
// // }, [count]);
// //   return (
// //     <div>
// //       {/* <Header setInputValue={setInputValue} /> */}
// //       <BlogCardContainer inputValue={inputValue} />
// //       {/* <CarouselCard /> */}
// //       <Footer />
// //       {/* <TrendingCard /> */}
// //     </div>
// //   );
// // }
