import "./ChampList.scss";
import { useGlobalContext } from "../../context";
import ChampItem from "../ChampItem";

function ChampList() {
	const { champs } = useGlobalContext();
	let total = champs.length;

	return (
		<>
			<p className="champs-total">Total champs: {total}</p>
			<ul className="champ-list">
				{total > 0 ? (
					champs.map((item) => <ChampItem item={item} key={item.key} />)
				) : (
					<p className="no-champs">No champs found...</p>
				)}
			</ul>
		</>
	);
}

export default ChampList;
