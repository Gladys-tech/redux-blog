import { useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { blogsSelector, fetchBlog, } from "./blogSlice";

const ArticleId = () => {
    const dispatch = useDispatch();
  const { data, isLoading, isError, errorMessage } = useSelector(blogsSelector);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div>
      {data.userId ? 
      (
        <>
        <h2>Loading...</h2>
         
        </>
      ): (
          <>
        <h4>article</h4>
        <article className="article">
           <h3>USER-ID: {data.userId}</h3>
           <h5>{data.title}</h5>
            <p>{data.body}</p>
         </article>
         </>
      )}
    </div>
  );
};

export default ArticleId;