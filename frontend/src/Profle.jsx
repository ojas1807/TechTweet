import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [profileImg, setProfileImg] = useState(null);
  const profileImgRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const id = window.localStorage.getItem("id");
    console.log(id);
    if (!id) {
      navigate("/login");
    } else {
      axios.get(`/user/${id}`).then((res) => {
        console.log(res);
      });
    }
  }, []);

  // Mock user data (replace with actual data from your backend or state management later)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123456789",
    password: "",
    about: "This is a sample user profile.",
    profileImg: null,
  };

  // Handle Profile Image Change
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-[4_4_0] min-h-screen">
      <div className="flex flex-col p-5">
        {/* USER AVATAR */}
        <div className="avatar relative group">
          <div className="w-32 rounded-full relative">
            <img
              src={
                profileImg ||
                user?.profileImg ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="Profile Avatar"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="absolute top-5 right-3 p-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 cursor-pointer">
              <MdEdit
                className="w-4 h-4 text-white"
                onClick={() => profileImgRef.current.click()}
              />
            </div>
            <input
              type="file"
              hidden
              accept="image/*"
              ref={profileImgRef}
              onChange={handleImgChange}
            />
          </div>
        </div>

        {/* USER INFO */}
        <div className="flex flex-col gap-4 mt-5 px-4">
          <div className="flex flex-col">
            <span className="font-bold text-lg">{user?.name}</span>
            <span className="text-sm text-slate-500">Email: {user?.email}</span>
            <span className="text-sm text-slate-500">Phone: {user?.phone}</span>
            <span className="text-sm text-slate-500">
              Password: {user?.password}
            </span>
            <span className="text-sm my-1">{user?.about}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
