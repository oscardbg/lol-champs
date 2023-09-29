import "./RootLayout.scss";
import { Outlet, Link, NavLink } from "react-router-dom";

function RootLayout() {
	return (
		<>
			<nav>
				<Link to="/">
					<h1>LOL Champs</h1>
				</Link>
				<ul>
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
