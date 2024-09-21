// import React from 'react'
// import { GoRocket } from "react-icons/go";
// import { FcNews } from "react-icons/fc";
// import { FaGraduationCap } from "react-icons/fa6";
// import { AiOutlineSmile } from "react-icons/ai";
// import { Link } from 'react-router-dom';

// export default function Sidebar() {
// 	return (
// 		<div className='md:flex-[2_2_0] w-18 max-w-fit'>
// 			<div className="drawer lg:drawer-open sticky top-0">
// 				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
// 				<div className="drawer-content flex flex-col items-center justify-center">
// 					{/* Page content here */}
// 					{/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
// 						Open drawer
// 					</label> */}
// 				</div>
// 				<div className="drawer-side">
// 					<label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
// 					<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
// 						{/* Sidebar content here */}
// 						<li><Link to="/news"><FcNews/> News Portal</Link></li>
// 						<li><Link to="/alumniStories"><FaGraduationCap/>Legacy tales</Link></li>
// 						<li><Link to='/ProjectPitch'><GoRocket/>Project Portal</Link></li>
// 						<li><Link to="/aboutUs" ><AiOutlineSmile />About Us</Link></li>
// 					</ul>
// 				</div>
// 			</div>

// 		</div>
// 	)
// }



// import React from 'react'
// import { GoRocket } from "react-icons/go";
// import { FcNews } from "react-icons/fc";
// import { FaGraduationCap } from "react-icons/fa6";
// import { AiOutlineSmile } from "react-icons/ai";
// import { Link } from 'react-router-dom';

// export default function Sidebar() {
//   return (
//     <div className='w-full lg:w-1/4'> {/* Make full width on mobile, quarter on desktop */}
//       <div className="drawer lg:drawer-open sticky top-0">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-side">
//           <ul className="menu bg-base-200 text-base-content min-h-full w-full lg:w-80 p-4">
//             <li><Link to="/news"><FcNews/> News Portal</Link></li>
//             <li><Link to="/alumniStories"><FaGraduationCap/> Legacy Tales</Link></li>
//             <li><Link to='/ProjectPitch'><GoRocket/> Project Portal</Link></li>
//             <li><Link to='/aboutUs'><AiOutlineSmile/> About Us</Link></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react'
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
//             <li className="text-lg font-semibold font-[Josefin Sans]"><Link to="/news"><FcNews /> News Portal</Link></li>
//             <li className="text-lg font-semibold font-[Josefin Sans]"><Link to="/alumniStories"><FaGraduationCap />Legacy tales</Link></li>
//             <li className="text-lg font-semibold font-[Josefin Sans]"><Link to='/ProjectPitch'><GoRocket />Project Portal</Link></li>
//             <li className="text-lg font-semibold font-[Josefin Sans]"><a><AiOutlineSmile />About Us</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react';
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
            {/* Sidebar content here */}
            <li className=" font-sans text-lg font-semibold" >
              <Link to="/news"><FcNews /> News Portal</Link>
            </li>
            <li className="font-sans text-lg font-semibold" >
              <Link to="/alumniStories"><FaGraduationCap /> Legacy Tales</Link>
            </li>
            <li className="font-sans text-lg font-semibold" >
              <Link to='/ProjectPitch'><GoRocket /> Project Portal</Link>
            </li>
            <li className="font-sans text-lg font-semibold" >
              <a><AiOutlineSmile /> About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
