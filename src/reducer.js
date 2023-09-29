import { champsData } from "./championsData";
import { scale } from "./utils";

const setFilter = (element, param) => {
	return element.toLowerCase().indexOf(param.toLowerCase()) !== -1;
};

const reducer = (state, action) => {
	const { type, field, payload } = action;

	switch (type) {
		case "HANDLE_INPUT": {
			return { ...state, [field]: payload };
		}
		case "FILTER_CHAMPS": {
			const { cName, cRole, cResource, cDifficulty } = state;
			const newList = champsData
				.filter((champ) =>
					// champ.id.toLowerCase().indexOf(state.cName.toLowerCase()) !== -1
					setFilter(champ.id, cName)
				)
				.filter((champ) => cRole === "" || champ.tags.includes(cRole))
				.filter(
					(champ) =>
						cDifficulty === "" ||
						scale
							.find((item) => item.name === cDifficulty)
							.values.includes(champ.info.difficulty)
				)
				.filter((champ) => cResource === "" || champ.partype === cResource);
			return { ...state, champs: newList };
		}
		case "CLEAR_FILTERS": {
			return {
				...state,
				cName: "",
				cRole: "",
				cResource: "",
				cDifficulty: "",
			};
		}
		default: {
			return state;
		}
	}
};

export default reducer;
