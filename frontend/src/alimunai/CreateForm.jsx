import { useState, useRef } from "react";
import api from "../utils/axios";


const CreateForm = () => {
  const [newPost, setNewPost] = useState({
    heading: "",
    photos: "",
    caption: "",
    type: "alumni",
    user_id: localStorage.getItem("id"),
  });

  const [img, setImg] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
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

        // Now, set the newPost state with the base64 image
        const postData = {
          ...newPost,
          photos: base64Image, // Use base64 image
        };

        // Create post with image
        try {
          const response = await api.post("/post/create", postData);
          console.log(response.data);
          alert("Post created successfully");
          setNewPost({ heading: "", photos: "", caption: "", type: "alumni", user_id: localStorage.getItem("id") });
          setImg(null);
          imgRef.current.value = null;
        } catch (error) {
          console.error("Error creating post", error);
          setIsError(true);
        } finally {
          setIsPending(false);
        }
      };
      reader.readAsDataURL(img); // Start reading the file as base64
    } else {
      // Create post without image
      try {
        const response = await api.post("/post/create", newPost);
        console.log(response.data);
        alert("Post created successfully");
        setNewPost({ heading: "", photos: "", caption: "", type: "alumni", user_id: localStorage.getItem("id") });
        imgRef.current.value = null;
      } catch (error) {
        console.error("Error creating post", error);
        setIsError(true);
      } finally {
        setIsPending(false);
      }
    }
  };

  return (
    <div className="flex justify-center  items-center min-h-screen">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Alumni Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="heading">
              Heading
            </label>
            <input
              type="text"
              name="heading"
              value={newPost.heading}
              onChange={handleInputChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-bold  mb-2" htmlFor="photos">
              Photo (Upload)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={imgRef}
              className="input m-auto pt-2 input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="caption">
              Caption
            </label>
            <textarea
              name="caption"
              value={newPost.caption}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit Post"}
          </button>
          {isError && <p className="text-red-500 text-center">Error creating post, please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
