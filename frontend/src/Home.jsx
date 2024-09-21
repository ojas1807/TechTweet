import { useEffect, useState } from "react";

import Posts from "./common/Posts";
import CreatePost from "./common/CreatePost";
import api from "./utils/axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [feedType, setFeedType] = useState("forYou");

  const navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.getItem("id")) {
      // console.log("Login again ");
      navigate("/login");
    }
  });

  useEffect(() => {
    console.log(document.body.textContent);
  }, []);

  return (
    <>
      <div className="flex-[4_4_0]  border-gray-700 min-h-screen">
        {/* Header */}
        <div className="flex w-full border-b border-gray-700">
          <div
            className={
              "flex justify-center flex-1 p-2 hover:bg-secondary transition duration-300 cursor-pointer relative"
            }
            onClick={() => setFeedType("forYou")}
          >
            For you
            {feedType === "forYou" && (
              <div className="absolute bottom-0 w-10  h-1 rounded-full bg-primary"></div>
            )}
          </div>
          <div
            className="flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
            onClick={() => setFeedType("following")}
          >
            Following
            {feedType === "following" && (
              <div className="absolute bottom-0 w-10  h-1 rounded-full bg-primary"></div>
            )}
          </div>
        </div>

        {/*  CREATE POST INPUT */}
        <CreatePost />

        {/* POSTS */}
        <Posts />
      </div>
    </>
  );
};
export default HomePage;
