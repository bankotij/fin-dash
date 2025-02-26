import { useEffect, useState } from "react";
import { BalanceHistoryTracker } from "./BalanceHistory";
import { ExpenseStatistics } from "./Charts/ExpenseStatistics";
import { RecentTransactions } from "./Charts/RecentTransactions";
import { WeeklyActivityChart } from "./Charts/WeeklyExpenseChart";
import { API_BASE_URL } from "../utils/mock/mockData";
import { CardCarousel } from "./Card/CardCarousel";
import { Layout, LayoutProps } from "./Containers/Layout";
import { Sidebar } from "./Sidebar";
import { QuickTransfer } from "./QuickTransfer";
import Header from "./Navigation/Header";
import axios from "axios";

// TODO: Replace temp elements with actual ones
const BaseLayoutElements: LayoutProps = {
	FirstRowElements: [
		<CardCarousel />,
		<RecentTransactions />,
	],
	SecondRowElements: [<WeeklyActivityChart />, <ExpenseStatistics />],
	ThirdRowElements: [<QuickTransfer />, <BalanceHistoryTracker />],
};

export function Dashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	// useEffect(() => {
	// 	axios.get(API_BASE_URL + "/api/getCards").then((res) => {
	// 		console.log(res.data);
	// 	});
	// }, []);

	return (
		<>
			<Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
			<Header toggleSidebar={toggleSidebar} />
			<Layout
				FirstRowElements={BaseLayoutElements.FirstRowElements}
				SecondRowElements={BaseLayoutElements.SecondRowElements}
				ThirdRowElements={BaseLayoutElements.ThirdRowElements}
			/>
		</>
	);
}
