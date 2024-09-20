import { useState } from 'react';

const ProjectPitch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ title: '', description: '', media: '' });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const isValidMediaUrl = (url) => {
        return /\.(jpeg|jpg|gif|png|mp4|webm|ogg)$/.test(url);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newProject.media && !isValidMediaUrl(newProject.media)) {
            alert("Please enter a valid media URL (image or video).");
            return;
        }
        setProjects([...projects, newProject]);
        setNewProject({ title: '', description: '', media: '' }); // Reset form
    };

    return (
        <div className="flex flex-col min-h-screen w-[950px] bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white shadow-md w-full">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center w-full">
                    <div className="text-3xl font-bold text-blue-600">Project Pitching</div>
                    <input
                        type="text"
                        placeholder="Search Projects..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="input input-bordered w-full lg:w-1/2 xl:w-1/3" // Adjusted width for better desktop view
                    />
                </div>
            </nav>

            <div className="flex flex-1 w-full container mx-auto px-6 py-6">
                {/* Sidebar */}
                <aside className="bg-gray-200 w-full lg:w-1/4 p-6 hidden lg:block"> {/* Visible only on larger screens */}
                    <h2 className="text-lg font-bold mb-4">Categories</h2>
                    <ul>
                        <li><a href="#" className="hover:underline block py-2">All Projects</a></li>
                        <li><a href="#" className="hover:underline block py-2">Technology</a></li>
                        <li><a href="#" className="hover:underline block py-2">Science</a></li>
                        <li><a href="#" className="hover:underline block py-2">Arts</a></li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 bg-white shadow-lg rounded-lg w-[900px]">
                    <h2 className="text-3xl font-bold mb-6">Pitch Your Idea</h2>
                    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 shadow-md rounded-lg">
                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2" htmlFor="title">Project Title</label>
                            <input
                                type="text"
                                name="title"
                                value={newProject.title}
                                onChange={handleInputChange}
                                required
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2" htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                value={newProject.description}
                                onChange={handleInputChange}
                                required
                                className="textarea textarea-bordered w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2" htmlFor="media">Media URL (Image/Video)</label>
                            <input
                                type="text"
                                name="media"
                                value={newProject.media}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Submit Idea</button>
                    </form>

                    <h2 className="text-3xl font-bold mt-8">Project Ideas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {projects.filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase())).map((project, index) => (
                            <div key={index} className="bg-white shadow-md p-4 rounded transition-transform transform hover:scale-105">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-gray-700 mt-2">{project.description}</p>
                                {project.media && (
                                    <div className="mt-4">
                                        <img src={project.media} alt={`Media for ${project.title}`} className="w-full h-auto rounded" />
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

export default ProjectPitch;
