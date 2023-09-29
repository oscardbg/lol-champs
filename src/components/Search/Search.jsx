import "./Search.scss";
import { useGlobalContext } from "../../context";
import { scale, roles, resources } from "../../utils";

function Search() {
	const { cName, cRole, cDifficulty, cResource, handleInput } =
		useGlobalContext();

	return (
		<>
			<div className="search">
				<article>
					<input
						type="text"
						placeholder="Search the champion"
						name="cName"
						value={cName}
						onChange={(e) => handleInput(e.target.name, e.target.value)}
					/>
				</article>
				<article>
					<select
						name="cRole"
						value={cRole}
						onChange={(e) => handleInput(e.target.name, e.target.value)}
					>
						<option value="">All Roles</option>
						{roles.map((item) => (
							<option value={item.name} key={item.id}>
								{item.name}
							</option>
						))}
					</select>
				</article>
				<article>
					<select
						name="cDifficulty"
						value={cDifficulty}
						onChange={(e) => handleInput(e.target.name, e.target.value)}
					>
						<option value="">All difficulties</option>
						{scale.map((item) => (
							<option value={item.name} key={item.id}>
								{item.name}
							</option>
						))}
					</select>
				</article>
				<article>
					<select
						name="cResource"
						value={cResource}
						onChange={(e) => handleInput(e.target.name, e.target.value)}
					>
						<option value="">All Resources</option>
						{resources.map((item) => (
							<option value={item.name} key={item.id}>
								{item.name}
							</option>
						))}
					</select>
				</article>
			</div>
		</>
	);
}

export default Search;
