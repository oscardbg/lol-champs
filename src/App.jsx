import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Champions from "./components/Champions";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="champions" element={<Champions />} />
		</Route>
	)
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
