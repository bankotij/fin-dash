import { HomeIcon, SettingsIcon } from "lucide-react";
import { LinkWithIcon } from "./Navigation/LinkWithIcon";
import { SoarTask } from "./common/Logos/SoarTask";

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
				className="fixed top-0 left-0 z-40 w-64 h-screen  transition-transform -translate-x-full lg:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-white">
					
					<ul className="space-y-2 font-medium">
						<li className="mb-5 ml-4 ">
							<SoarTask />
						</li>
						<li className=" ml-4 ">
							<LinkWithIcon
								href="#"
								text={"Dashboard"}
								icon={HomeIcon}
							/>
						</li>
						<li className=" ml-4 ">
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
