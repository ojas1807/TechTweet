import { Routes, Route } from "react-router-dom";
import Carousel from "./comps/Carousel";
import Navbar from "./comps/Navbar";
import Navbar1 from "./comps/Navbar1";
import Sidebar from "./comps/Sidebar";
import HomePage from "./Home";

function App() {
  return (
    <><Navbar1 />
    <div className="flex">
      
      <Sidebar className="w-1/4"/>
      <div className="flex max-w-full mx-0 ">
        <div >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
