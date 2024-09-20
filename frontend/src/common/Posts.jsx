import { useEffect,useState } from "react";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton.jsx";
import api from "../utils/axios.js";
import { POSTS } from "./dummy";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	//fetching the post from /post
	const fetchPosts = async () => {
		const response = await api.get("/post");
		setPosts(response.data);
	};
	useEffect(() => {
		fetchPosts();
	}, []);
	const isLoading = false;

	return (
		<>
			{isLoading && (
				<div className='flex flex-col justify-center'>
					<PostSkeleton />
					<PostSkeleton />
					<PostSkeleton />
				</div>
			)}
			{!isLoading && POSTS?.length === 0 && <p className='text-center my-4'>No posts in this tab. Switch 👻</p>}
			{!isLoading && POSTS && (
				<div className='grid grid-cols-2 gap-2' >
					{POSTS.map((post) => (
						<Post key={post._id} post={post} />
						
					))}
				</div>
			)}
		</>
	);
};
export default Posts;