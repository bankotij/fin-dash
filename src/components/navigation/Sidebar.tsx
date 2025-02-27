import { HomeIcon, SettingsIcon } from "lucide-react";
import { LinkWithIcon } from "./LinkWithIcon";
import { SoarTask } from "../common/Logos/SoarTask";
import { useContext } from "react";
import { AppContext } from "../../utils/context/AppProvider";

export function Sidebar() {
	const { sidebarContext } = useContext(AppContext);
	return (
		<>
			{/* Backdrop - only visible when sidebar is open on mobile */}
			{sidebarContext.isSidebarOpen && (
				<div 
					className="fixed inset-0 bg-gray-800 bg-opacity-50 z-30 lg:hidden"
					onClick={() => sidebarContext.setIsSidebarOpen(false)}
				></div>
			)}
			
			<aside
				id="default-sidebar"
				className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out ${
					sidebarContext.isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} lg:translate-x-0`}
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-white">
					<ul className="space-y-2 font-medium">
						<li className="mb-[16px] ml-4 ">
							<SoarTask />
						</li>
						<li className="ml-4">
							<LinkWithIcon
								href="/"
								isActive={sidebarContext.activeRoute === "/"}
								text={"Dashboard"}
								icon={HomeIcon}
							/>
						</li>
						<li className="ml-4">
							<LinkWithIcon
								href="/settings"
								isActive={sidebarContext.activeRoute === "/settings"}
								text={"Settings"}
								icon={SettingsIcon}
							/>
						</li>
					</ul>
				</div>
			</aside>
		</>
	);
}