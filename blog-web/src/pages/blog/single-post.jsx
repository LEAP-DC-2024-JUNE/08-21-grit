import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "../../components";
import { Footer } from "../../components";

const SinglePost = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const searchParam = useSearchParams();
  const value = searchParam.get("selectedId");

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${value}`)
      .then((response) => response.json())
      .then((data) => setSingleArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <div>
      <Header />

      <div>
        <p>{SinglePost.user?.title}</p>
      </div>
      <div>
        <img
          src={SinglePost.user?.profile_image_90}
          alt=""
          width={640}
          height={640}
        />
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: singleArticle.body_html }}
        className="w-[800px] gap-8 px-20 mx-80 my-20"
      ></div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SinglePost;
