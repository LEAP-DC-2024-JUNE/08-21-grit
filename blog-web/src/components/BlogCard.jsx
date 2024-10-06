import Link from "next/link";

export const BlogCard = ({
  imgSrc,
  username,
  title,
  description,
  tag_list,
  date,
  id,
}) => {
  return (
    <Link href={{ pathname: "/blog/single-post", query: { selectedId: id } }}>
      <div className="w-[350px]">
        {
          <img
            src={imgSrc}
            alt={title}
            height={300}
            className="border-2 w-full rounded-2xl"
          />
        }

        <span className="rounded-md bg-slate-200 text-sky-600 w-[57px] text-center gap-10">
          {tag_list}
        </span>

        <h1>{title}</h1>
        <p>{username}</p>
        <p>{description}</p>
        <p className="font-normal text-base text-slate-500">{date}</p>
      </div>
    </Link>
  );
};
