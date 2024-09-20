import React, { useState } from 'react';

const alumniData = [
    {
        id: 1,
        name: 'John Doe',
        photo: 'https://via.placeholder.com/150',
        description: 'From struggling with coding in college to becoming a successful software engineer.',
        fullStory: 'John started his journey as an engineering student at XYZ University. He faced a lot of challenges but his passion for coding led him to work at a top tech firm. Today, he is one of the leading software engineers in the field, contributing to open-source projects and mentoring young developers.'
    },
    {
        id: 2,
        name: 'Jane Smith',
        photo: 'https://via.placeholder.com/150',
        description: 'How I became a Product Manager from a Computer Science background.',
        fullStory: 'Jane initially started as a developer but her interest in product management gradually grew. After completing her studies at ABC Institute, she pursued an MBA in Technology Management. Today, she leads product development at one of the top startups in Silicon Valley.'
    },
    {
        id: 3,
        name: 'Samuel Green',
        photo: 'https://via.placeholder.com/150',
        description: 'A journey from IT intern to CTO of a multinational company.',
        fullStory: 'Samuel had humble beginnings as an intern in the IT department. Over time, through persistence and learning, he became the Chief Technology Officer at a major multinational corporation, overseeing cutting-edge projects and innovations.'
    },
    {
        id: 4,
        name: 'Emily Johnson',
        photo: 'https://via.placeholder.com/150',
        description: 'Transitioning from Software Engineer to AI Researcher.',
        fullStory: 'Emily was always intrigued by AI and machine learning. After working as a software engineer for a few years, she pursued a PhD in AI and is now contributing to research that shapes the future of technology.'
    }
];

const AlumniStories = () => {
    const [selectedStory, setSelectedStory] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [likes, setLikes] = useState(0);

    const handleReadMore = (alumni) => {
        setSelectedStory(alumni);
        setLikes(0); // Reset likes for each profile
        setComments([]); // Clear comments for each profile
    };

    const handleClose = () => {
        setSelectedStory(null);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        setComments([...comments, newComment]);
        setNewComment('');
    };

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="relative min-h-screen flex flex-col bg-[#E6F2F4]">
            {/* Header */}
            <header className="text-center mb-4 bg-[#81CEEB] py-8">
                <h1 className="text-4xl font-bold text-black" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                    <span className="bg-gradient-to-r from-blue-400 to-teal-500 text-black p-2 rounded">Tales of Legacy</span>
                </h1>
                <p className="text-lg text-black mt-2">Explore the inspiring stories of our alumni who have left a lasting impact.</p>
            </header>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Alumni Stories Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {alumniData.map((alumni) => (
                        <div key={alumni.id} className="bg-[#FFF9C7] shadow-lg p-4 rounded transition-transform transform hover:scale-105">
                            <img src={alumni.photo} alt={`${alumni.name}`} className="w-full h-48 object-cover rounded mb-4" />
                            <h3 className="text-xl font-semibold">{alumni.name}</h3>
                            <p className="text-gray-700 mt-2">{alumni.description}</p>
                            <button
                                className="text-blue-500 hover:underline mt-4"
                                onClick={() => handleReadMore(alumni)}
                            >
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full Story Modal */}
            {selectedStory && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-4xl">
                        <button className="text-red-500 float-right" onClick={handleClose}>X</button>
                        <img
                            src={selectedStory.photo}
                            alt={`${selectedStory.name}`}
                            className="w-full h-64 object-cover rounded mb-4"
                        />
                        <h2 className="text-2xl font-bold mb-4">{selectedStory.name}</h2>
                        <p className="text-gray-700 mb-6">{selectedStory.fullStory}</p>

                        {/* Like and Comment Section */}
                        <div className="flex items-center mb-4">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={handleLike}
                            >
                                Like ({likes})
                            </button>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">Comments</h3>
                            <ul className="space-y-2 mb-4">
                                {comments.map((comment, index) => (
                                    <li key={index} className="border-b pb-2">{comment}</li>
                                ))}
                            </ul>
                            <input
                                type="text"
                                value={newComment}
                                onChange={handleCommentChange}
                                className="border p-2 w-full mb-4"
                                placeholder="Leave a comment"
                            />
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded"
                                onClick={handleCommentSubmit}
                            >
                                Submit Comment
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AlumniStories;
