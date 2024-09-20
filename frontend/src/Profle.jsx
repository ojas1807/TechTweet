import api from "./utils/axios.js";
import { useState, useRef, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [data, setData] = useState(null);
  const profileImgRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const id = window.localStorage.getItem("id");
    if (!id) {
      navigate("/login");
    } else {
      api.get(`/user/${id}`).then((res) => {
        setData(res.data);
      });
    }
  }, []);

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
    data && (
      <div className="flex-[4_4_0] min-h-screen">
        <div className="flex flex-col p-5">
          {/* USER AVATAR */}
          <div className="avatar relative group">
            <div className="w-32 rounded-full relative">
              <img
                src={
                  data.profile_pic ||
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
              <span className="font-bold text-lg">{data?.name}</span>
              <span className="">Email: {data?.email}</span>
              <span className="">Phone: {data?.phone}</span>
              {/* <span className="text-sm text-slate-500">
                Password: {data?.password}
              </span> */}
              <span className="">About: {data?.about}</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfilePage;
