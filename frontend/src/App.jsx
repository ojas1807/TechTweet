import { Routes, Route } from "react-router-dom";
import Navbar1 from "./comps/Navbar1";
import Sidebar from "./comps/Sidebar";
import HomePage from "./Home";
import NewsPortal from "./NewsPortal";
import ProjectPitch from "./ProjectPitch";
import AlumniStories from "./comps/aluministori"; // Ensure the correct path
import AboutUs from "./comps/aboutUs";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar1 />

      {/* Main content container */}
      <div className="flex flex-col lg:flex-row min-h-screen"> {/* Flexbox for responsive layout */}
        
        {/* Sidebar */}
        <Sidebar className="w-full lg:w-1/4" /> {/* Sidebar takes full width on small screens, 1/4 on large */}

        {/* Content Area */}
        <div className="flex-1 w-full max-w-full p-4"> {/* Ensure content takes full width and has padding */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPortal />} />
            <Route path="/ProjectPitch" element={<ProjectPitch />} />
            <Route path="/alumniStories" element={<AlumniStories />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
