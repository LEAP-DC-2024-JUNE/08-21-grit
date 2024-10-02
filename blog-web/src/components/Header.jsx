import { MetaLogo } from "@/components";
import { Search } from "../components";
// import { Link } from "react-router-dom";

export const Header = ({ setInputValue }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-20">
      <div className="flex-shrink-0 mb-4 md:mb-0 pl-24">
        <MetaLogo />
      </div>

      <div className="flex-grow flex justify-center mb-4 md:mb-0">
        <button className="px-4">Blog</button>

        <button className="px-4">Home</button>

        <button className="px-4">Contact</button>
      </div>
      <input
        type="text"
        className="border-2 text-black w-[150px] md:w-[150px] mr-24"
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Search..."
      />

      <div className="absolute pt-1 right-2 pr-28">
        <button>
          <Search />
        </button>
      </div>
    </div>
  );
};
