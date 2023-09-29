import "./ChampList.scss";
import { useGlobalContext } from "../../context";
import ChampItem from "../ChampItem";

function ChampList() {
	const { champs } = useGlobalContext();

	return (
		<>
			<ul className="champ-list">
				{champs.map((item) => (
					<ChampItem item={item} />
				))}
			</ul>
		</>
	);
}

export default ChampList;
