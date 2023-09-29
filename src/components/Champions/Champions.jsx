import "./Champions.scss";
import ChampList from "../ChampList";
import Search from "../Search";

function Champions() {
	return (
		<>
			<section className="champions">
				<Search />
				<ChampList />
			</section>
		</>
	);
}

export default Champions;
