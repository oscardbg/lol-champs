import "./Search.scss";
import { useGlobalContext } from "../../context";
import { scale, roles, resources } from "../../utils";

function Search() {
	const { cName, cRole, cDifficulty, cResource, handleInput, clearFilters } =
		useGlobalContext();

	return (
		<>
			<div className="search">
				<article>
					<span className="icon">
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
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					</span>
					<input
						type="text"
						placeholder="Search by name"
						name="cName"
						value={cName}
						onChange={(e) => handleInput(e.target.name, e.target.value)}
					/>
				</article>
				<article>
					<label>Role:</label>
					<select
						name="cRole"
						value={cRole}
						onChange={(e) => handleInput(e.target.name, e.target.value)}
					>
						<option value="">All</option>
						{roles.map((item) => (
							<option value={item.name} key={item.id}>
								{item.name}
							</option>
						))}
					</select>
				</article>
				<article>
					<label>Difficulty:</label>
					<select
						name="cDifficulty"
						value={cDifficulty}
						onChange={(e) => handleInput(e.target.name, e.target.value)}
					>
						<option value="">All</option>
						{scale.map((item) => (
							<option value={item.name} key={item.id}>
								{item.name}
							</option>
						))}
					</select>
				</article>
				<article>
					<label>Resource:</label>
					<select
						name="cResource"
						value={cResource}
						onChange={(e) => handleInput(e.target.name, e.target.value)}
					>
						<option value="">All</option>
						{resources.map((item) => (
							<option value={item.name} key={item.id}>
								{item.name}
							</option>
						))}
					</select>
				</article>
				<article>
					<button onClick={clearFilters}>Clear Filters</button>
				</article>
			</div>
		</>
	);
}

export default Search;
