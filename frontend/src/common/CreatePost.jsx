import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const imgRef = useRef(null);

  const data = {
    profileImg: "/avatars/boy1.png",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setIsError(false);

    const formData = new FormData();
    formData.append("text", text);
    if (img) {
      formData.append("image", img); // Assuming backend accepts 'image' field for the file
    }

    try {
      const response = await axios.post("/posts/create", formData, 
    
      );
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

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
    }
  };

  return (
    <div className="flex p-4 items-start gap-4 border-b border-gray-700">
                 {" "}
      <div className="avatar">
                       {" "}
        <div className="w-8 rounded-full">
                             {" "}
          <img src={data.profileImg || "/avatar-placeholder.png"} />           
             {" "}
        </div>
                   {" "}
      </div>
                 {" "}
      <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
                       {" "}
        <textarea
          className="textarea w-full text-lg resize-none border-none focus:outline-none border-gray-800"
          placeholder="What is happening?!"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
                       {" "}
        {img && (
          <div className="relative w-72 mx-auto">
                                   {" "}
            <IoCloseSharp
              className="absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer"
              onClick={() => {
                setImg(null);
                imgRef.current.value = null;
              }}
            />
                                   {" "}
            <img
              src={URL.createObjectURL(img)}
              className="w-full mx-auto h-72 object-contain rounded"
            />
                               {" "}
          </div>
        )}
                       {" "}
        <div className="flex justify-between border-t py-2 border-t-gray-700">
                             {" "}
          <div className="flex gap-1 items-center">
                                   {" "}
            <CiImageOn
              className="fill-primary w-6 h-6 cursor-pointer"
              onClick={() => imgRef.current.click()}
            />
                                   {" "}
            <BsEmojiSmileFill className="fill-primary w-5 h-5 cursor-pointer" />
                               {" "}
          </div>
                             {" "}
          <input
            type="file"
            accept="image/*"
            hidden
            ref={imgRef}
            onChange={handleImgChange}
          />
                             {" "}
          <button
            className="btn btn-primary rounded-full btn-sm text-white px-4"
            disabled={isPending}
          >
                                    {isPending ? "Posting..." : "Post"}         
                     {" "}
          </button>
                         {" "}
        </div>
                       {" "}
        {isError && <div className="text-red-500">Something went wrong</div>}   
               {" "}
      </form>
             {" "}
    </div>
  );
};

export default CreatePost;
