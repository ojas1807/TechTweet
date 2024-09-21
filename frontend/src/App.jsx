import { Routes, Route, useLocation } from "react-router-dom";
import Carousel from "./comps/Carousel";
import Navbar from "./comps/Navbar";
import Navbar1 from "./comps/Navbar1";
import Sidebar from "./comps/Sidebar";
import HomePage from "./Home";
import NewsPortal from "./NewsPortal";
import ProjectPitch from "./ProjectPitch";
import AlumniStories from "./comps/aluministori"; // Ensure the correct path
import AboutUs from "./comps/aboutUs";
import LoginForm from "./auth/login.jsx";
import Signup from "./auth/signup.jsx";
import ProfilePage from "./Profle.jsx";
import ProjectPitchItem from "./ProjectPitchItem.jsx";

function App() {
  const location = useLocation();

  const hideSidebar = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      <Navbar1 />
      <div className="flex flex-col lg:flex-row">
        {!hideSidebar && <Sidebar className="lg:w-64 w-full" />}
        <div className="flex-1 w-full max-w-full lg:pl-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPortal />} />
            <Route path="/ProjectPitch" element={<ProjectPitch />} />
            <Route path="/alumniStories" element={<AlumniStories />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/project/:id" element={<ProjectPitchItem />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
