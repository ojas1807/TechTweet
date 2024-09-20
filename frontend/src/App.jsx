<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
=======
import { Routes, Route, useLocation } from "react-router-dom";
import Carousel from "./comps/Carousel";
import Navbar from "./comps/Navbar";
>>>>>>> 498af958ede08d4cf40b560c283ee17a04dfeb1d
import Navbar1 from "./comps/Navbar1";
import Sidebar from "./comps/Sidebar";
import HomePage from "./Home";
import NewsPortal from "./NewsPortal";
import ProjectPitch from "./ProjectPitch";
<<<<<<< HEAD
import AlumniStories from "./comps/aluministori"; // Ensure the correct path
import AboutUs from "./comps/aboutUs";
=======
import LoginForm from "./auth/login.jsx";
>>>>>>> 498af958ede08d4cf40b560c283ee17a04dfeb1d

function App() {
  const location = useLocation();

  const hideSidebar = ['/login', '/signup'].includes(location.pathname);

  return (
<<<<<<< HEAD
    <>
      {/* Navbar */}
      <Navbar1 />

      {/* Main content container */}
      <div className="flex flex-col lg:flex-row min-h-screen"> {/* Flexbox for responsive layout */}
        
        {/* Sidebar */}
        <Sidebar className="w-full lg:w-1/4" /> {/* Sidebar takes full width on small screens, 1/4 on large */}

        {/* Content Area */}
        <div className="flex-1 w-full max-w-full p-4"> {/* Ensure content takes full width and has padding */}
=======
    <><Navbar1 />
    <div className="flex w-full">
      
    {!hideSidebar && <Sidebar className="w-1/4"/>}
      <div className="flex w-full">
        <div className="w-full" >
>>>>>>> 498af958ede08d4cf40b560c283ee17a04dfeb1d
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPortal />} />
            <Route path="/ProjectPitch" element={<ProjectPitch />} />
<<<<<<< HEAD
            <Route path="/alumniStories" element={<AlumniStories />} />
            <Route path="/aboutUs" element={<AboutUs />} />
=======
            <Route path="/login" element={<LoginForm />} />
>>>>>>> 498af958ede08d4cf40b560c283ee17a04dfeb1d
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
