import { Footer, Header } from "@/components";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div>
      <Header />
      <div className="flex ml-[320px] w-[642px] h-[208px] my-20 py-10">
        <h2 className=" text-8xl">404</h2>
        <div className="ml-10">
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-500 font-extralight mb-4">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>

          <Link
            href="/"
            className="rounded-md mt-8 bg-[#4B6BFB] text-white py-1 px-2.5 w-[130px] h-[40px]"
          >
            Back To Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Custom404;
