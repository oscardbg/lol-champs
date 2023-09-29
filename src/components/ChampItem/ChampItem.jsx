import "./ChampItem.scss";
import { Link } from "react-router-dom";

function ChampItem(props) {
	const { key, name, title, image } = props.item;

	return (
		<>
			<li className="champ-item">
				<Link to={key}>
					<span className="champ">
						<img src={`./img/championIcons/${image.full}`} alt="" />
					</span>
					<p className="name">{name}</p>
					<p className="title">{title}</p>
					<img src="./img/mastery7.png" alt="" className="mastery" />
				</Link>
			</li>
		</>
	);
}

export default ChampItem;
