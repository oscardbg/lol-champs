import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { champsData } from "./championsData";

const AppContext = createContext();

const initialState = {
	cName: "",
	cType: "",
	cResource: "",
	cDifficulty: "",
	champs: champsData,
};

function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setSearchName = (value) => {
		dispatch({ type: "SET_SEARCH_NAME", payload: value });
	};

	useEffect(() => {
		dispatch({ type: "BY_NAME" });
	}, [state.cName]);

	return (
		<>
			<AppContext.Provider value={{ ...state, setSearchName }}>
				{children}
			</AppContext.Provider>
		</>
	);
}

function useGlobalContext() {
	return useContext(AppContext);
}

export { AppProvider, useGlobalContext };
