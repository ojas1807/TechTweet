import React, { useEffect, useState } from "react";
import CreateForm from "../alimunai/createForm";
import api from "../utils/axios";
import Post from "../common/Post";
import { BiLoader } from "react-icons/bi";

const AlumniStories = () => {
  const [alumniData, setAlumniData] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [showCreateForm, setShowCreateForm] = useState(false); // State to toggle CreateForm
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api.get("/post/alumini").then((res) => {
      console.log(res);
      setAlumniData(res.data);
      setLoading(false);
    });
  }, []);

  const handleReadMore = (alumni) => {
    setSelectedStory(alumni);
    setLikes(0);
    setComments([]);
  };

  const handleClose = () => {
    setSelectedStory(null);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm); // Toggle form visibility
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center">
        <BiLoader className="animate-spin mx-auto h-10 w-10 text-blue-600" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-[#E6F2F4]">
      {/* Header */}
      <header className="text-center mb-4 bg-[#81CEEB] py-8">
        <h1
          className="text-4xl font-bold text-black"
          style={{ fontFamily: "Josefin Sans, sans-serif" }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-teal-500 text-black p-2 rounded">
            Tales of Legacy
          </span>
        </h1>
        <p className="text-lg text-black mt-2">
          Explore the inspiring stories of our alumni who have left a lasting
          impact.
        </p>
      </header>

      {/* Button to toggle CreateForm */}
      <div className="flex-1 flex justify-center  ">
        <button
          onClick={toggleCreateForm}
          className="bg-blue-600 text-white px-6 py-3 h-12 rounded-md shadow-md hover:bg-blue-500 transition duration-200"
        >
          {showCreateForm ? "Hide Create Form" : "Show Create Form"}
        </button>
      </div>

      {/* Conditionally render CreateForm */}
      {showCreateForm && (
        <div className="mt-4 p-4 border border-blue-200 rounded-md shadow-lg bg-white">
          <CreateForm />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 mx-auto place-items-center">
          {alumniData.map((alumni) => (
            <Post post={alumni} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniStories;
