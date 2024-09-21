import { useEffect, useState } from "react";
import api from "./utils/axios";
import { FaRegHeart } from "react-icons/fa";

function ProjectPitchItem({ project, index }) {
  const currentUserId = window.localStorage.getItem("id");
  const isMyPost = project.user_id === currentUserId;
  
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(project.likes);
  const [comments, setComments] = useState(project.comments || []);
  const [newComment, setNewComment] = useState("");

  async function handleLike() {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
      await api.post(`/project/like/${project._id}`, { user_id: currentUserId });
    } else {
      if (likes >= 1) {
        setLikes(likes - 1);
        setIsLiked(false);
      }
      await api.post(`/project/unlike/${project._id}`, { user_id: currentUserId });
    }
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment) return;

    try {
      const response = await api.post(`/project/comment/${project._id}`, {
        user_id: currentUserId,
        comment: newComment,
      });
      
      if (response.status === 200) {
        setComments([...comments, { user_id: currentUserId, comment: newComment }]);
        setNewComment("");
      }
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  return (
    <div key={index} className="bg-white shadow-md p-4 rounded transition-transform transform">
      <h3 className="text-xl font-semibold line-clamp-1">{project.projectTitle}</h3>
      <p className="text-gray-700 mt-2 line-clamp-3">{project.projectDescription}</p>
      {project.techstack && <div className="mt-4"><p>Tech Stack: {project.techstack}</p></div>}
      {project.github_link && (
        <div className="mt-4">
          <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Github Link
          </a>
        </div>
      )}
      {project.tags && <div className="mt-4"><p>Tags: {project.tags}</p></div>}

      <div className="flex items-center gap-2 mt-2">
        <button type="button" onClick={handleLike}>
          <FaRegHeart className="w-4 h-4 cursor-pointer text-slate-500 hover:text-pink-500" />
        </button>
        <p>{likes}</p>
      </div>

      {/* Comments Section */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Comments:</h4>
        <ul className="list-disc pl-5">
          {comments.map((comment, index) => (
            <li key={index} className="text-gray-700 mt-1">{comment.comment}</li>
          ))}
        </ul>

        <form onSubmit={handleCommentSubmit} className="mt-2 flex">
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
            className="border rounded-l-md p-2 flex-1"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-md">Post</button>
        </form>
      </div>
    </div>
  );
}

export default ProjectPitchItem;
