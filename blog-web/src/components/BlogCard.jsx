const BlogCard = ({ imgSrc, tag, title, username, date }) => {
  return (
    <div className="flex">
      <Image src={imgSrc} width={300} height={300} />
      <p>{tag}</p>
      <h1>{title}</h1>
      <p>{username}</p>
      <p>{date}</p>
    </div>
  );
};

export default BlogCard;
