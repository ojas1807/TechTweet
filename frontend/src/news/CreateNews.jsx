import { useState, useRef } from "react";
import api from "../utils/axios";

const CreateNews = () => {
  const [newsPost, setNewsPost] = useState({
    headline: "",
    description: "",
    image: "",

  });

  const [img, setImg] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsPost({ ...newsPost, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    let base64Image = ""; // Declare this variable to hold the base64 image

    if (img) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        base64Image = reader.result; // Get the base64 string

        // Now, set the newsPost state with the base64 image
        const postData = {
          ...newsPost,
          image: base64Image, // Use base64 image
        };

        // Create news post with image
        try {
          const response = await api.post("/news/create", postData);
          console.log(response.data);
          alert("News post created successfully");
          setNewsPost({ headline: "", description: "", image: "", user_id: localStorage.getItem("id") });
          setImg(null);
          imgRef.current.value = null;
        } catch (error) {
          console.error("Error creating news post", error);
          setIsError(true);
        } finally {
          setIsPending(false);
        }
      };
      reader.readAsDataURL(img); // Start reading the file as base64
    } else {
      // Create news post without image
      try {
        const response = await api.post("/news/create", newsPost);
        console.log(response.data);
        alert("News post created successfully");
        setNewsPost({ headline: "", description: "", image: "", user_id: localStorage.getItem("id") });
        imgRef.current.value = null;
      } catch (error) {
        console.error("Error creating news post", error);
        setIsError(true);
      } finally {
        setIsPending(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Create News Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="headline">
              Headline
            </label>
            <input
              type="text"
              name="headline"
              value={newsPost.headline}
              onChange={handleInputChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              value={newsPost.description}
              onChange={handleInputChange}
              required
              className="textarea textarea-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="image">
              Image (Upload)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={imgRef}
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit News Post"}
          </button>
          {isError && <p className="text-red-500 text-center">Error creating news post, please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateNews;
