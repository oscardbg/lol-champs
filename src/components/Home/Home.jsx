import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<section className="home">
				<img src="./img/Feature_FCR.png" alt="" />
				<h2>League of Legends Lore </h2>
				<Link to="champions">See all the champions</Link>
			</section>
		</>
	);
}

export default Home;
