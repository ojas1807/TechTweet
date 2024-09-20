import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import api from "../axios"; // Your axios instance

const CreatePost = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const imgRef = useRef(null);

    const [newPost, setNewPost] = useState({
        caption: "",
        photos: "",
        user_id: "66ed70c6c2c03d54ed28abf5", // Hardcoded user ID
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsPending(true);
      setIsError(false);
  
      let base64Image = ""; // Declare this variable to hold the base64 image
  
      if (img) {
          const reader = new FileReader();
          reader.onloadend = async () => {
              base64Image = reader.result; // Get the base64 string
  
              // Now, set the newPost state with the base64 image
              const postData = {
                  ...newPost,
                  photos: base64Image, // Set photos as an array
              };
  
              // Create post with caption and photos
              try {
                  const response = await api.post("/post/create", postData);
                  console.log(response.data);
                  alert("Post created successfully");
                  setText("");
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
              setText("");
              setImg(null);
              imgRef.current.value = null;
          } catch (error) {
              console.error("Error creating post", error);
              setIsError(true);
          } finally {
              setIsPending(false);
          }
      }
  };
  

    const handleImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImg(file);
        }
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
        setNewPost((prev) => ({ ...prev, caption: e.target.value }));
    };

    return (
        <div className="flex p-4 items-start gap-4 border-b border-gray-700">
            <div className="avatar">
                <div className="w-8 rounded-full">
                    <img src="/avatars/boy1.png" alt="Profile" />
                </div>
            </div>
            <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
                <textarea
                    className="textarea w-full text-lg resize-none border-none focus:outline-none border-gray-800"
                    placeholder="What is happening?!"
                    value={text}
                    onChange={handleTextChange}
                />
                {img && (
                    <div className="relative w-72 mx-auto">
                        <IoCloseSharp
                            className="absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer"
                            onClick={() => {
                                setImg(null);
                                imgRef.current.value = null;
                            }}
                        />
                        <img
                            src={URL.createObjectURL(img)}
                            className="w-full mx-auto h-72 object-contain rounded"
                            alt="Selected"
                        />
                    </div>
                )}
                <div className="flex justify-between border-t py-2 border-t-gray-700">
                    <div className="flex gap-1 items-center">
                        <CiImageOn
                            className="fill-primary w-6 h-6 cursor-pointer"
                            onClick={() => imgRef.current.click()}
                        />
                        <BsEmojiSmileFill className="fill-primary w-5 h-5 cursor-pointer" />
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        ref={imgRef}
                        onChange={handleImgChange}
                    />
                    <button
                        className="btn btn-primary rounded-full btn-sm text-white px-4"
                        disabled={isPending}
                    >
                        {isPending ? "Posting..." : "Post"}
                    </button>
                </div>
                {isError && <div className="text-red-500">Something went wrong</div>}
            </form>
        </div>
    );
};

export default CreatePost;
