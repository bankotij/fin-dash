import {  useContext, useEffect } from "react";
import Header from "./Navigation/Header";
import { AppContext } from "../utils/context/AppProvider";

interface ContentProps {
	contentTitle: string;
	activeRoute: string;
	RouteComponent: React.ReactElement
}

export function Content({RouteComponent, contentTitle, activeRoute}: ContentProps) {
	const { sidebarContext } = useContext(AppContext);
	useEffect(() => {
		sidebarContext.setActiveRoute(activeRoute);
	}, [activeRoute, sidebarContext]);

	return (
		<>
			<Header toggleSidebar={sidebarContext.toggleSidebar} contentTitle={contentTitle} />
			{RouteComponent}
		</>
	);
}
