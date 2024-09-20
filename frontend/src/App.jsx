import { Routes, Route, useLocation } from "react-router-dom";
import Carousel from "./comps/Carousel";
import Navbar from "./comps/Navbar";
import Navbar1 from "./comps/Navbar1";
import Sidebar from "./comps/Sidebar";
import HomePage from "./Home";
import NewsPortal from "./NewsPortal";
import ProjectPitch from "./ProjectPitch";
import LoginForm from "./auth/login.jsx";

function App() {
  const location = useLocation();

  const hideSidebar = ['/login', '/signup'].includes(location.pathname);

  return (
    <><Navbar1 />
    <div className="flex w-full">
      
    {!hideSidebar && <Sidebar className="w-1/4"/>}
      <div className="flex w-full">
        <div className="w-full" >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPortal />} />
            <Route path="/ProjectPitch" element={<ProjectPitch />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
