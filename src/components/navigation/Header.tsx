import { Search, Settings, Bell, User2, Menu } from "lucide-react";
import { useState } from "react";
import { SearchInput } from "./SearchInput";

const Header = ({ toggleSidebar, contentTitle }) => {
	const [searchVisible, setSearchVisible] = useState(false);

	return (
		<div className="lg:ml-64  duration-300 ">
			<header className="flex-column items-center justify-between w-full pl-6 pr-6 p-4 bg-white">
				<div className="flex justify-between w-full">
					<div className="flex items-center">
						<button
							onClick={toggleSidebar}
							className="p-2 mr-3 rounded-full hover:bg-gray-100 lg:hidden"
							aria-label="Toggle sidebar"
						>
							<Menu className="h-6 w-6 text-gray-700" />
						</button>
						<h2 className="text-2xl font-semibold text-gray-700">
							{contentTitle}
						</h2>
					</div>

					<div className="flex items-center gap-4">
						<div
							className={`relative ${
								searchVisible ? "block" : "hidden"
							} md:block hidden lg:visible`}
						>
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<Search className="h-5 w-5 text-gray-400" />
							</div>
							<SearchInput />
						</div>
						<button
							className="p-2 rounded-full hover:bg-gray-100 md:hidden"
							onClick={() => setSearchVisible(!searchVisible)}
						>
							<Search className="h-5 w-5 text-gray-500" />
						</button>

						<button className="p-2 rounded-full hover:bg-gray-100 hidden md:block">
							<Settings className="h-6 w-6 text-gray-500" />
						</button>

						<button className="p-2 rounded-full hover:bg-gray-100 relative">
							<Bell className="h-6 w-6 text-gray-500" />
							<div className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded"></div>
						</button>

						<div className="ml-2">
							<User2 className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-gray-200"></User2>
						</div>
					</div>
				</div>

				<div className="flex-row">
					{searchVisible && (
						<>
							<div className={`visible md:hidden`}>
								<SearchInput />
							</div>
						</>
					)}
				</div>
			</header>
		</div>
	);
};

export default Header;
