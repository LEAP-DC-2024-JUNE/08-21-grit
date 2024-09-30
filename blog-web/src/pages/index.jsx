import Image from "next/image";
import localFont from "next/font/local";
import {
  Header,
  Footer,
  CarouselCard,
  TrendingCard,
  BlogCard,
  BlogCardContainer,
} from "../components";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <BlogCardContainer />
      {/* <CarouselCard />
      <Footer />
      <TrendingCard /> */}
    </div>
  );
}
