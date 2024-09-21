import { useEffect, useState } from "react";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton.jsx";
import api from "../utils/axios.js";
import { POSTS } from "./dummy";
import { BiLoader, BiLoaderCircle } from "react-icons/bi";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await api.get("/post");
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPosts();
  }, [posts]);
  const isLoading = false;

  return (
    <>
      {isLoading && (
        <div className="flex flex-col justify-center">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      )}
      {!isLoading && posts?.length === 0 && (
        <>
      {/* <BiLoaderCircle className="   " /> */}

<BiLoader  className="animate-spin mx-auto h-10 w-10" />
        <p className="text-center my-4">No posts in this tab. Switch 👻</p>
        </>
      )}
      {!isLoading && posts && (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 place-items-center gap-2">
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};
export default Posts;
