import { champsData } from "./championsData";

const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_SEARCH_NAME": {
			return { ...state, cName: payload };
		}
		case "BY_NAME": {
			const newList = champsData.filter(
				(champ) =>
					champ.id.toLowerCase().indexOf(state.cName.toLowerCase()) !== -1
			);
			return { ...state, champs: newList };
		}
		default: {
			return state;
		}
	}
};

export default reducer;
