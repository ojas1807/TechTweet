import React from 'react'
import { GoRocket } from "react-icons/go";
import { FcNews } from "react-icons/fc";
import { FaGraduationCap } from "react-icons/fa6";
import { AiOutlineSmile } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
	const data = {
		fullName: "Pritam Ninganaik",
		username: "PritamN",
		profileImg: "/avatars/boy1.png",
	};
	return (
		<div>
			<div className="drawer lg:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					{/* Page content here */}
					<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
						Open drawer
					</label>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
					<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
						{/* Sidebar content here */}
						<li><a><FcNews/> News Portal</a></li>
						<li><a><FaGraduationCap/>Legacy tales</a></li>
						<li><a><GoRocket/>Project Portal</a></li>
						<li><a><AiOutlineSmile/>About Us</a></li>
					</ul>
				</div>
			</div>

		</div>
	)
}
