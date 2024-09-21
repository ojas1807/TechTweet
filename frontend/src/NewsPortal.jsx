import React from 'react';
import CreateNews from './news/CreateNews';

const NewsPortal = () => {
    return (
        <div className="bg-gray-100">
            {/* Navbar */}
            <header className="text-center mb-4 bg-[#81CEEB] py-8">
                <h1 className="text-4xl font-bold text-black" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                    <span className="bg-gradient-to-r from-blue-400 to-teal-500 text-black p-2 rounded">Latest Updates</span>
                </h1>
                <p className="text-lg text-black mt-2">Get the latest updates on what's happening</p>
            </header>

            {/* Carousel */}
            <div className="container mx-auto mt-4">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-64 object-cover" alt="Top News 2" />
                    <div className="absolute bottom-0 left-0 p-4 bg-opacity-60 bg-gray-900 text-white">
                            <h2 className="text-2xl font-bold">Breaking News 1</h2>
                            <p>Summary of the top news headline...</p>
                        </div>
                        <a href="#slide4" className="absolute left-0 btn btn-circle">❮</a>
                        <a href="#slide2" className="absolute right-0 btn btn-circle">❯</a>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-64 object-cover" alt="Top News 2" />
                        <div className="absolute bottom-0 left-0 p-4 bg-opacity-60 bg-gray-900 text-white">
                            <h2 className="text-2xl font-bold">Breaking News 2</h2>
                            <p>Another headline summary...</p>
                        </div>
                        <a href="#slide1" className="absolute left-0 btn btn-circle">❮</a>
                        <a href="#slide3" className="absolute right-0 btn btn-circle">❯</a>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1464582920526-52639da1ce12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-64 object-cover" alt="Top News 3" />
                        <div className="absolute bottom-0 left-0 p-4 bg-opacity-60 bg-gray-900 text-white">
                            <h2 className="text-2xl font-bold">Breaking News 3</h2>
                            <p>More breaking news summary...</p>
                        </div>
                        <a href="#slide2" className="absolute left-0 btn btn-circle">❮</a>
                        <a href="#slide4" className="absolute right-0 btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* News Sections */}
            <div className="container mx-auto mt-6">
                <h2 className="text-3xl font-bold mb-4">Latest News</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* News Article 1 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-48 object-cover" alt="News 1" />
                        <h3 className="text-xl font-semibold mt-4">New Library </h3>
                        <p className="text-gray-700 mt-2">Theres a new Library in Towm</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                    {/* News Article 2 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://plus.unsplash.com/premium_photo-1665520347050-38570519c860?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-48 object-cover" alt="News 2" />
                        <h3 className="text-xl font-semibold mt-4">Black Boards are missing </h3>
                        <p className="text-gray-700 mt-2">Now a Days Colleges are missing Black Boards...</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                    {/* News Article 3 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://images.unsplash.com/photo-1620458883441-3d278950d90b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-48 object-cover" alt="News 3" />
                        <h3 className="text-xl font-semibold mt-4">Last year of College </h3>
                        <p className="text-gray-700 mt-2">This is a short description of the news. Click to read more...</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                </div>

                {/* More News Section */}
                <h2 className="text-3xl font-bold mt-8 mb-4">More News</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* News Article 4 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-48 object-cover" alt="News 4" />
                        <h3 className="text-xl font-semibold mt-4">Social Media </h3>
                        <p className="text-gray-700 mt-2">Is he a friend or a foe</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                    {/* News Article 5 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-48 object-cover" alt="News 5" />
                        <h3 className="text-xl font-semibold mt-4">Change Vs Code</h3>
                        <p className="text-gray-700 mt-2">Not the Code Editor bit the THeme</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                    {/* News Article 6 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-48 object-cover" alt="News 1" />
                        <h3 className="text-xl font-semibold mt-4">New Library </h3>
                        <p className="text-gray-700 mt-2">Theres a new Library in Towm</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                </div>
            </div> 

<div>

            <CreateNews />
</div>

        </div>
    );
};

export default NewsPortal;