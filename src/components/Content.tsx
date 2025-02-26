import {  useState } from "react";
import { Sidebar } from "./Navigation/Sidebar";
import Header from "./Navigation/Header";

// TODO: Replace temp elements with actual ones
interface ContentProps {
	contentTitle: string;
	activeRoute: string;
	RouteComponent: React.ReactElement
}

export function Content({RouteComponent, contentTitle, activeRoute}: ContentProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<>
			<Sidebar activeRoute={activeRoute} isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
			<Header toggleSidebar={toggleSidebar} contentTitle={contentTitle} />
			{RouteComponent}
		</>
	);
}
