import { Routes, Route } from "react-router-dom";
import { Content } from "./components/Content";
import { Layout } from "./components/Containers/Layout";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Content contentTitle="Overview" activeRoute="/" RouteComponent={<Layout />} />} />
			<Route path="/settings" element={<Content contentTitle="Settings" activeRoute="/settings" RouteComponent={<></>}/>} />
		</Routes>
	);
}

export default App;
