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

      <div className="w-[800px] gap-8 px-20 mx-80 pt-10">
        <p className="text-2xl font-bold">{singleArticle.title}</p>
        <div className="flex font-extralight text-gray-500 gap-4 my-4 ">
          <p>{singleArticle.user ? singleArticle.user.name : "Unknown User"}</p>
          <p>{singleArticle.readable_publish_date}</p>
        </div>
      </div>
      <div className="w-[800px] px-20 mx-80 gap-2">
        {singleArticle.user ? (
          <img
            src={singleArticle.user.profile_image_90}
            alt=""
            width={640}
            height={640}
          />
        ) : (
          <img
            src="fallback-image-url.jpg"
            alt="Fallback"
            width={640}
            height={640}
          />
        )}
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
