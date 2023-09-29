import { createContext, useContext, useReducer } from "react";
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

	return (
		<>
			<AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
		</>
	);
}

function useGlobalContext() {
	return useContext(AppContext);
}

export { AppProvider, useGlobalContext };
