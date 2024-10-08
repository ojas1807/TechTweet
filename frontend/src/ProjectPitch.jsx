import { useEffect, useState } from "react";
import api from "./utils/axios";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import ProjectPitchItem from "./ProjectPitchItem";
// import api from './axios';

const ProjectPitch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState([]);
  const [datafrombackend, setdatafrombackend] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    api.get("/project").then((res) => {
      setdatafrombackend(res.data);
    });
  }, [projects]);

  const [newProject, setNewProject] = useState({
    projectTitle: "",
    projectDescription: "",
    techstack: "",
    github_link: "",
    user_id: "66ed70c6c2c03d54ed28abf5",

    tags: "",
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleLike = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProjects([...projects, newProject]);
    // setNewProject({
    //     projectTitle: '',
    //     projectDescription: '',
    //     techstack: '',
    //     github_link: '',
    //     tags: '',
    // });
    const responce = await api.post("/project/create", newProject);
    const data = await responce.data;
    // console.log(data);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-blue-600">
            Project Pitching
          </div>
        </div>
      </nav>

      <div className="flex flex-1 w-full container mx-auto px-6 py-6 flex-wrap">
        <main className="flex-1 p-6 bg-white shadow-lg rounded-lg w-full max-w-full lg:max-w-3/4">
          <h2 className="text-3xl font-bold mb-6">Pitch Your Idea</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-6 shadow-md rounded-lg"
          >
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="projectTitle"
              >
                Project Title
              </label>
              <input
                type="text"
                name="projectTitle"
                value={newProject.projectTitle}
                onChange={handleInputChange}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="projectDescription"
              >
                Description
              </label>
              <textarea
                name="projectDescription"
                value={newProject.projectDescription}
                onChange={handleInputChange}
                required
                className="textarea textarea-bordered w-full"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="techstack"
              >
                Tech Stack used for the Project
              </label>
              <input
                type="text"
                name="techstack"
                value={newProject.techstack}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="github_link"
              >
                Github URL
              </label>
              <input
                type="text"
                name="github_link"
                value={newProject.github_link}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2" htmlFor="tags">
                Tags
              </label>
              <input
                type="text"
                name="tags"
                value={newProject.tags}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            </div>
            <button
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-500 text-white text-lg w-full"
            >
              Submit Idea
            </button>
          </form>

          <h2 className="text-3xl font-bold mt-8">Project Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
            {/* //here  projects will be shown */}
            {datafrombackend.map((project, index) => {
              console.log(project);
              return <ProjectPitchItem project={project} index={index} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectPitch;
