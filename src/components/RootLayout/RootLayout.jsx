import "./RootLayout.scss";
import { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

function RootLayout() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<nav>
				<Link to="/">
					<h1>LOL Champs</h1>
				</Link>
				<span className="bars" onClick={() => setShowMenu(!showMenu)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
						/>
					</svg>
				</span>
				<ul
					{...(showMenu && { className: "active" })}
					onClick={() => setShowMenu(!showMenu)}
				>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="champions">Champions</NavLink>
					</li>
					<li>
						<NavLink to="about">About</NavLink>
					</li>
				</ul>
			</nav>
			<div className="container">
				<Outlet />
			</div>
		</>
	);
}

export default RootLayout;
