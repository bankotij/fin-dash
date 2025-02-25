import { CardCarousel } from "./Card/CardCarousel";
import { Sidebar } from "./Sidebar";

export function Dashboard() {
	return (
		<>
			<Sidebar />
			<div className="p-10 sm:ml-64">
				<CardCarousel />
			</div>
		</>
	);
}
