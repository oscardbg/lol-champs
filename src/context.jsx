import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { champsData } from "./championsData";

const AppContext = createContext();

const initialState = {
	cName: "",
	cRole: "",
	cResource: "",
	cDifficulty: "",
	champs: champsData,
};

function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleInput = (name, value) => {
		dispatch({ type: "HANDLE_INPUT", field: name, payload: value });
	};

	useEffect(() => {
		dispatch({ type: "FILTER_CHAMPS" });
	}, [state.cName, state.cRole, state.cResource, state.cDifficulty]);

	return (
		<>
			<AppContext.Provider value={{ ...state, handleInput }}>
				{children}
			</AppContext.Provider>
		</>
	);
}

function useGlobalContext() {
	return useContext(AppContext);
}

export { AppProvider, useGlobalContext };
