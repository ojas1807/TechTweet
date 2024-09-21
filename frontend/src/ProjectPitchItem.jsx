import { useEffect, useState } from "react";
import api from "./utils/axios";
import { FaRegHeart } from "react-icons/fa";

function ProjectPitchItem({ project, index }) {
  const currentUserId = window.localStorage.getItem("id");
  var isMyPost = project.user_id == currentUserId;

  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(project.likes);
  async function handleLike() {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
      await api
        .post(`/project/like/${project._id}`, { user_id: currentUserId })
        .then((res) => {
          if (res.status != 200) {
            setLikes(likes - 1);
          }
        });
    } else {
      if (likes >= 1) {
        setLikes(likes - 1);
        setIsLiked(false);
      }
      await api
        .post(`/project/unlike/${project._id}`, { user_id: currentUserId })
        .then((res) => {
          if (res.status != 200) {
            setLikes(likes + 1);
          }
        });
    }
  }
  console.log("Liked");
  return (
    <div
      key={index}
      className="bg-white shadow-md p-4 rounded transition-transform transform"
    >
      <h3 className="text-xl font-semibold line-clamp-1">
        {project.projectTitle}
      </h3>
      <p className="text-gray-700 mt-2 line-clamp-3 ">
        {project.projectDescription}
      </p>
      {project.techstack && (
        <div className="mt-4">
          <p>Tech Stack: {project.techstack}</p>
        </div>
      )}
      {project.github_link && (
        <div className="mt-4">
          <a
            href={project.github_link}
            target="_blank"
            className="text-blue-600 underline"
          >
            Github Link
          </a>
        </div>
      )}
      {project.tags && (
        <div className="mt-4">
          <p>Tags: {project.tags}</p>
        </div>
      )}

      <div className="flex items-center gap-2 mt-2 ">
        <button type="button" onClick={handleLike}>
          <FaRegHeart className="w-4 h-4 cursor-pointer text-slate-500 hover:text-pink-500" />
        </button>
        <p>{likes}</p>
      </div>
    </div>
  );
}
export default ProjectPitchItem;
