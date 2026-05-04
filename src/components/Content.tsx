import { useContext, useEffect } from "react";
import Header from "./navigation/Header";
import { AppContext } from "../utils/context/AppProvider";
import { PrototypeNotice } from "./common/PrototypeNotice";

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
			<div className="pb-16">{RouteComponent}</div>
			<PrototypeNotice />
		</>
	);
}
