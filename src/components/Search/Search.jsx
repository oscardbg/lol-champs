import "./Search.scss";
import { useGlobalContext } from "../../context";

function Search() {
	const { cName, setSearchName } = useGlobalContext();

	return (
		<>
			<div className="search">
				<article>
					<input
						type="text"
						placeholder="Search the champion"
						value={cName}
						onChange={(e) => setSearchName(e.target.value)}
					/>
				</article>
			</div>
		</>
	);
}

export default Search;
