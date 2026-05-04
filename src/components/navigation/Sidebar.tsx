import { Link } from "react-router-dom";
import { LinkWithIcon } from "./LinkWithIcon";
import { FinDashLogo } from "../common/Logos/FinDashLogo";
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
				<div className="h-full overflow-y-auto border-r border-slate-200/80 bg-gradient-to-b from-white via-slate-50/90 to-slate-50 px-3 py-5 shadow-[4px_0_24px_-8px_rgba(15,23,42,0.08)]">
					<ul className="space-y-1 font-medium">
						<li className="mb-5">
							<Link to="/" className="block outline-none">
								<FinDashLogo />
							</Link>
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