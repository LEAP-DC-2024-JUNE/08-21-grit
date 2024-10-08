import { MetaLogo } from "@/components";
import { Search } from "../components";
import { useRouter } from "next/router";
import Link from "next/link";

export const Header = ({ setInputValue }) => {
  const router = useRouter();
  return (
    <div className="pl-36 flex flex-col md:flex-row items-center justify-between my-10 ">
      <div className="flex-shrink-0 mb-4 md:mb-0 ">
        <MetaLogo />
      </div>

      <div className="flex-grow flex justify-center mb-4 md:mb-0">
        <Link
          href="/"
          className="px-4 hover:text-gray-500 hover:cursor-pointer text-lg "
        >
          Home
        </Link>

        <Link
          href="/blog"
          className="px-4 hover:text-gray-500 hover:cursor-pointer text-lg "
        >
          Blog
        </Link>

        <Link
          href="/contact-us"
          className="px-4 hover:text-gray-500 hover:cursor-pointer text-lg"
        >
          Contact
        </Link>
      </div>

      <div>
        {/* <input
          type="text"
          className="border-2 text-black w-[150px] md:w-[150px] mr-24 relative"
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Search..."
        /> */}
        {router.pathname == "/blog" ? (
          <div>
            <input
              type="text"
              className="border-gray-200 rounded-lg text-black w-[180px]  mr-36 relative display: inline-block bg-slate-100 p-2 italic "
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Search... "
            />
            <div className="absolute display: block top-0 mt-12  right-2 pr-40 ">
              <button>
                <Search />
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
