import { BalanceHistoryTracker } from "../Charts/BalanceHistory";
import { ExpenseStatistics } from "../Charts/ExpenseStatistics";
import { WeeklyActivityChart } from "../Charts/WeeklyExpenseChart";
import { CardCarousel } from "./Card/CardCarousel";
import { Layout, LayoutProps } from "./Containers/Layout";
import { Sidebar } from "./Sidebar";
import { TempActions } from "./temp/TempActions";
import { TempTransactions } from "./temp/TempTransactions";

// TODO: Replace temp elements with actual ones
const BaseLayoutElements: LayoutProps = {
	FirstRowElements: [<CardCarousel />, <TempTransactions />],
	SecondRowElements: [<WeeklyActivityChart />, <ExpenseStatistics />],
	ThirdRowElements: [<TempActions />, <BalanceHistoryTracker />],
};

export function Dashboard() {
	return (
		<>
			<Sidebar />
			<Layout
				FirstRowElements={BaseLayoutElements.FirstRowElements}
				SecondRowElements={BaseLayoutElements.SecondRowElements}
				ThirdRowElements={BaseLayoutElements.ThirdRowElements}
			/>
		</>
	);
}
