import { Routes, Route } from "react-router-dom";
import Carousel from "./comps/Carousel";
import Navbar from "./comps/Navbar";
import Navbar1 from "./comps/Navbar1";
import Sidebar from "./comps/Sidebar";
import HomePage from "./Home";
import NewsPortal from "./NewsPortal";
import ProjectPitch from "./ProjectPitch";

function App() {
  return (
    <><Navbar1 />
    <div className="flex">
      
      <Sidebar className="w-1/4"/>
      <div className="flex max-w-full mx-0 ">
        <div >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPortal />} />
            <Route path="/ProjectPitch" element={<ProjectPitch />} />

          </Routes>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
