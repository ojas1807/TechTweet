// import React from 'react';
// import { GoRocket } from "react-icons/go";
// import { FcNews } from "react-icons/fc";
// import { FaGraduationCap } from "react-icons/fa6";
// import { AiOutlineSmile } from "react-icons/ai";
// import { Link } from 'react-router-dom';

// export default function Sidebar() {
//   return (
//     <div className='md:flex-[2_2_0] w-18 max-w-fit'>
//       <div className="drawer lg:drawer-open sticky top-0">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col items-center justify-center">
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
//           <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
//             {/* Sidebar content here */}
//             <li className=" font-sans text-lg font-semibold" >
//               <Link to="/news"><FcNews /> News Portal</Link>
//             </li>
//             <li className="font-sans text-lg font-semibold" >
//               <Link to="/alumniStories"><FaGraduationCap /> Legacy Tales</Link>
//             </li>
//             <li className="font-sans text-lg font-semibold" >
//               <Link to='/ProjectPitch'><GoRocket /> Project Portal</Link>
//             </li>
//             <li className="font-sans text-lg font-semibold" >
//               <a><AiOutlineSmile /> About Us</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react'
import { GoRocket } from "react-icons/go";
import { FcNews } from "react-icons/fc";
import { FaGraduationCap } from "react-icons/fa6";
import { AiOutlineSmile } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='md:flex-[2_2_0] w-18 max-w-fit'>
            <div className="drawer lg:drawer-open sticky top-0">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content with added padding */}
                        <li className="py-4"><Link to="/news"><FcNews /> News Portal</Link></li>
                        <li className="py-4"><Link to="/alumniStories"><FaGraduationCap /> Legacy Tales</Link></li>
                        <li className="py-4"><Link to='/ProjectPitch'><GoRocket /> Project Portal</Link></li>
                        <li className="py-4"><a><AiOutlineSmile /> About Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

