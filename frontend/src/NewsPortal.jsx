import React from 'react';

const NewsPortal = () => {
    return (
        <div className="bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white shadow-md sticky top-0 ">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <div className="text-2xl font-bold text-blue-600">News Portal</div>
                    <div>
                        <ul className="flex space-x-6">
                            <li><a href="#" className="hover:text-blue-600">Home</a></li>
                            <li><a href="#" className="hover:text-blue-600">World</a></li>
                            <li><a href="#" className="hover:text-blue-600">Politics</a></li>
                            <li><a href="#" className="hover:text-blue-600">Business</a></li>
                            <li><a href="#" className="hover:text-blue-600">Technology</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Carousel */}
            <div className="container mx-auto mt-4">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://via.placeholder.com/1200x500" className="w-full" alt="Top News 1" />
                        <div className="absolute bottom-0 left-0 p-4 bg-opacity-60 bg-gray-900 text-white">
                            <h2 className="text-2xl font-bold">Breaking News 1</h2>
                            <p>Summary of the top news headline...</p>
                        </div>
                        <a href="#slide4" className="absolute left-0 btn btn-circle">❮</a>
                        <a href="#slide2" className="absolute right-0 btn btn-circle">❯</a>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://via.placeholder.com/1200x500" className="w-full" alt="Top News 2" />
                        <div className="absolute bottom-0 left-0 p-4 bg-opacity-60 bg-gray-900 text-white">
                            <h2 className="text-2xl font-bold">Breaking News 2</h2>
                            <p>Another headline summary...</p>
                        </div>
                        <a href="#slide1" className="absolute left-0 btn btn-circle">❮</a>
                        <a href="#slide3" className="absolute right-0 btn btn-circle">❯</a>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://via.placeholder.com/1200x500" className="w-full" alt="Top News 3" />
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
                        <img src="https://via.placeholder.com/400x200" className="w-full" alt="News 1" />
                        <h3 className="text-xl font-semibold mt-4">News Title 1</h3>
                        <p className="text-gray-700 mt-2">This is a short description of the news. Click to read more...</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                    {/* News Article 2 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://via.placeholder.com/400x200" className="w-full" alt="News 2" />
                        <h3 className="text-xl font-semibold mt-4">News Title 2</h3>
                        <p className="text-gray-700 mt-2">This is a short description of the news. Click to read more...</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                    {/* News Article 3 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://via.placeholder.com/400x200" className="w-full" alt="News 3" />
                        <h3 className="text-xl font-semibold mt-4">News Title 3</h3>
                        <p className="text-gray-700 mt-2">This is a short description of the news. Click to read more...</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                </div>

                {/* More News Section */}
                <h2 className="text-3xl font-bold mt-8 mb-4">More News</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* News Article 4 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://via.placeholder.com/400x200" className="w-full" alt="News 4" />
                        <h3 className="text-xl font-semibold mt-4">News Title 4</h3>
                        <p className="text-gray-700 mt-2">This is a short description of the news. Click to read more...</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                    {/* News Article 5 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://via.placeholder.com/400x200" className="w-full" alt="News 5" />
                        <h3 className="text-xl font-semibold mt-4">News Title 5</h3>
                        <p className="text-gray-700 mt-2">This is a short description of the news. Click to read more...</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                    {/* News Article 6 */}
                    <div className="bg-white shadow-md p-4">
                        <img src="https://via.placeholder.com/400x200" className="w-full" alt="News 6" />
                        <h3 className="text-xl font-semibold mt-4">News Title 6</h3>
                        <p className="text-gray-700 mt-2">This is a short description of the news. Click to read more...</p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPortal;