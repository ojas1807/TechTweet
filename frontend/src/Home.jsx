import { useEffect, useState } from "react";

import Posts from "./common/Posts";
import CreatePost from "./common/CreatePost";
import api from "./axios";

const HomePage = () => {
  const [feedType, setFeedType] = useState("forYou");
  useEffect(() => {
    api.get("/").then((res) => {
      console.log(res);
    });
  });

  return (
    <>
      <div className="flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen">
        {/* Header */}
        <div className="flex w-full border-b border-gray-700">
          <div
            className={
              "flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
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
// import React from 'react'
// import '../App.css'
// import '../mycomp-css/Home.css'
// import Slideshow from './Slideshow';
// import LoginModal from './LoginModal';
// import Header from './Header';
// import Sidebar from './sidebar';
// // import Header from './Header';

// const images = [
//   'https://via.placeholder.com/600x400?text=Slide+1',
//   'https://via.placeholder.com/600x400?text=Slide+2',
//   'https://via.placeholder.com/600x400?text=Slide+3',
//   'https://via.placeholder.com/600x400?text=Slide+4'
// ];

// export default function Home() {
//   return (
//     // <div>
//     // <h3>This is Home</h3>
//     // <div className="home">
//     //   <Slideshow images={images} interval={5000} />
//     //   <LoginModal/>
//     //   <button class="btn btn-primary">Button</button>
//     // </div>
//     // </div>
//     <>
// 			<div className='flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen'>
// 				{/* Header */}
// 				<div className='flex w-full border-b border-gray-700'>
// 					<div
// 						className={
// 							"flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
// 						}
// 						onClick={() => setFeedType("forYou")}
// 					>
// 						For you
// 						{feedType === "forYou" && (
// 							<div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary'></div>
// 						)}
// 					</div>
// 					<div
// 						className='flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative'
// 						onClick={() => setFeedType("following")}
// 					>
// 						Following
// 						{feedType === "following" && (
// 							<div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary'></div>
// 						)}
// 					</div>
// 				</div>

// 				{/*  CREATE POST INPUT */}
// 				<CreatePost />

// 				{/* POSTS */}
// 				<Posts />
// 			</div>
// 		</>
//   )
// }
