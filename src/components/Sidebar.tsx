import { HomeIcon, SettingsIcon } from "lucide-react";
import { LinkWithIcon } from "./navigation/LinkWithIcon";

/*
  TODO:
  2. Verify CSS
  3. Add toggle for sidebar on mobile.
  4. Have some nice loops.
*/
export function Sidebar() {
	return (
		<>
			<aside
				id="default-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen  transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-white">
					<ul className="space-y-2 font-medium">
						<li>
							<LinkWithIcon
								href="#"
								text={"Dashboard"}
								icon={HomeIcon}
							/>
						</li>
						<li>
							<LinkWithIcon
								href="#"
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
