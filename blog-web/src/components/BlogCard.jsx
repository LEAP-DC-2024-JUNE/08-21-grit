import Link from "next/link";

export const BlogCard = ({
  imgSrc,
  username,
  title,
  description,
  tags,
  date,
  id,
}) => {
  return (
    <Link href={{ pathname: "/blog/single-post", query: { selectedId: id } }}>
      <div className="w-[392px] h-[510px]">
        <div className="p-2">
          {
            <img
              src={imgSrc}
              alt={title}
              height={240}
              width={360}
              className="border-2 w-full h-full rounded-2xl"
            />
          }
        </div>
        <div className="h-[240px] py-1 mt-2 p-2">
          <span className="rounded-md bg-[#4B6BFB0D] text-[#4B6BFB] py-1  my-4 px-2.5 ">
            {tags}
          </span>

          <h1 className="text-[#181A2A] font-bold  text-l mt-4">{title}</h1>
          <p className="text-[#181A2A] font-bold text-l ">{username}</p>
          <p className="text-[#181A2A] font-bold text-l ">{description}</p>
        </div>
        <p className="font-normal text-base text-slate-500 p-2 mt-2">{date}</p>
      </div>
    </Link>
  );
};
