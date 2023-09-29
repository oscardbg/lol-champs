import "./ChampDetail.scss";
import { useGlobalContext } from "../../context";
import { Link, useParams } from "react-router-dom";

const scale = [
	{
		name: "Easy",
		value: [0, 1, 2],
	},
	{
		name: "Medium",
		value: [3, 4, 5],
	},
	{
		name: "Moderate",
		value: [6, 7, 8],
	},
	{
		name: "Hard",
		value: [9, 10],
	},
];

function ChampDetail() {
	const { champs } = useGlobalContext();
	const { id } = useParams();

	const {
		id: champId,
		name,
		title,
		image,
		lore,
		tags,
		partype,
		info,
	} = champs.filter((champ) => champ.key === id)[0];
	const difficulty = scale.filter((item) =>
		item.value.includes(info.difficulty)
	)[0].name;

	return (
		<>
			<section className="champ-detail">
				<Link to="/champions">
					<img src="../img/arrows.png" alt="" />
					<span>Go Back</span>
				</Link>
				<article>
					<img src={`../img/loading/${champId}_0.jpg`} alt="" />
					<div className="champ-info">
						<h2>{name}</h2>
						<h3>{title}</h3>
						<div className="cnt-data">
							<span className="cnt-head">Resource:</span>
							<span className="data">{partype} </span>
						</div>
						<div className="cnt-data">
							<span className="cnt-head">Role{tags.length > 1 && "s"}:</span>
							{tags.map((tag, i) => (
								<span key={i} className="data">
									{tag}
								</span>
							))}
						</div>
						<div className="cnt-data">
							<span className="cnt-head">Difficulty:</span>
							<span className="data">{difficulty} </span>
						</div>
						<div className="cnt">
							<p>{lore}</p>
						</div>
					</div>
				</article>
			</section>
		</>
	);
}

export default ChampDetail;
