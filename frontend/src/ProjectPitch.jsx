import { useEffect, useState } from 'react';
import api from './utils/axios';
// import api from './axios';

const ProjectPitch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [projects, setProjects] = useState([]);
    const [datafrombackend, setdatafrombackend] = useState([]);

    useEffect(() => {
        api.get('/project').then((res) => {
            console.log(res.data);
            setdatafrombackend(res.data);
        });
    }, [datafrombackend,projects]);

    const [newProject, setNewProject] = useState({
        projectTitle: '',
        projectDescription: '',
        techstack: '',
        github_link: '',
         user_id:"66ed70c6c2c03d54ed28abf5",

        tags: '',
    });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setProjects([...projects, newProject]);
        // setNewProject({
        //     projectTitle: '',
        //     projectDescription: '',
        //     techstack: '',
        //     github_link: '',
        //     tags: '',
        // });
     const responce=  await api.post('/project/create', newProject);
     const data=await responce.data;
     console.log(data);
     
    };

    

    return (
        <div className="flex flex-col min-h-screen w-full bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white shadow-md w-full">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-3xl font-bold text-blue-600">Project Pitching</div>
                    <input
                        type="text"
                        placeholder="Search Projects..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="input input-bordered w-full lg:w-1/2 xl:w-1/3"
                    />
                </div>
            </nav>

            <div className="flex flex-1 w-full container mx-auto px-6 py-6 flex-wrap">
                {/* Sidebar */}
                <aside className="bg-gray-200 w-full lg:w-1/4 p-6 hidden lg:block">
                    <h2 className="text-lg font-bold mb-4">Categories</h2>
                    <ul>
                        <li><a href="#" className="hover:underline block py-2">All Projects</a></li>
                        <li><a href="#" className="hover:underline block py-2">Technology</a></li>
                        <li><a href="#" className="hover:underline block py-2">Science</a></li>
                        <li><a href="#" className="hover:underline block py-2">Arts</a></li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 bg-white shadow-lg rounded-lg w-full max-w-full lg:max-w-3/4">
                    <h2 className="text-3xl font-bold mb-6">Pitch Your Idea</h2>
                    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 shadow-md rounded-lg">
                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2" htmlFor="projectTitle">Project Title</label>
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
                            <label className="block text-sm font-bold mb-2" htmlFor="projectDescription">Description</label>
                            <textarea
                                name="projectDescription"
                                value={newProject.projectDescription}
                                onChange={handleInputChange}
                                required
                                className="textarea textarea-bordered w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2" htmlFor="techstack">Tech Stack used for the Project</label>
                            <input
                                type="text"
                                name="techstack"
                                value={newProject.techstack}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2" htmlFor="github_link">Github URL</label>
                            <input
                                type="text"
                                name="github_link"
                                value={newProject.github_link}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2" htmlFor="tags">Tags</label>
                            <input
                                type="text"
                                name="tags"
                                value={newProject.tags}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Submit Idea</button>
                    </form>

                    <h2 className="text-3xl font-bold mt-8">Project Ideas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">


                        {/* //here  projects will be shown */}
                        {datafrombackend.map((project, index) => (
                            <div key={index} className="bg-white shadow-md p-4 rounded transition-transform transform hover:scale-105">
                                <h3 className="text-xl font-semibold">{project.projectTitle}</h3>
                                <p className="text-gray-700 mt-2">{project.projectDescription}</p>
                                {project.techstack && (
                                    <div className="mt-4">
                                        <p>Tech Stack: {project.techstack}</p>
                                    </div>
                                )}
                                {project.github_link && (
                                    <div className="mt-4">
                                        <a href={project.github_link} target="_blank"  className="text-blue-600 underline">Github Link</a>
                                    </div>
                                )}
                                {project.tags && (
                                    <div className="mt-4">
                                        <p>Tags: {project.tags}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProjectPitch;
