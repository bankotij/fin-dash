import { LinkWithIcon } from "./LinkWithIcon";
import { SoarTask } from "../common/Logos/SoarTask";
import { useContext } from "react";
import { AppContext } from "../../utils/context/AppProvider";
import { HomeIcon, SettingsIcon, CreditCardIcon, DollarSignIcon, BriefcaseIcon, BanknoteIcon, ServerIcon, ShieldIcon } from "lucide-react";

type NavigationPath = {
	name: string;
	path: string;
	icon: React.ComponentType;
	isDisabled: boolean;
};

const navigationPaths: NavigationPath[] = [
	{ name: "Dashboard", path: "/", icon: HomeIcon, isDisabled: false },
	{ name: "Transactions", path: "/transactions", icon: DollarSignIcon, isDisabled: false },
	{ name: "Accounts", path: "/accounts", icon: BriefcaseIcon, isDisabled: false },
	{ name: "Investments", path: "/investments", icon: BanknoteIcon, isDisabled: false },
	{ name: "Cards", path: "/cards", icon: CreditCardIcon, isDisabled: false },
	{ name: "Loans", path: "/loans", icon: DollarSignIcon, isDisabled: false },
	{ name: "Services", path: "/services", icon: ServerIcon, isDisabled: false },
	{ name: "Privileges", path: "/privileges", icon: ShieldIcon, isDisabled: false },
	{ name: "Settings", path: "/settings", icon: SettingsIcon, isDisabled: false },
];

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
						<li className="mb-[16px] ml-4">
							<SoarTask />
						</li>

						{navigationPaths.map(({ name, path, icon: Icon, isDisabled }, index) => (
							<li key={index} className="ml-4">
								<LinkWithIcon
									href={path}
									isActive={sidebarContext.activeRoute === path}
									text={name}
									icon={Icon}
									isDisabled={isDisabled}
								/>
							</li>
						))}
					</ul>
				</div>
			</aside>
		</>
	);
}