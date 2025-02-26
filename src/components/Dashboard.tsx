import { ExpenseStatistics } from "../Charts/ExpenseStatistics";
import { WeeklyActivityChart } from "../Charts/WeeklyExpenseChart";
import { CardCarousel } from "./Card/CardCarousel";
import { Layout, LayoutProps } from "./Containers/Layout";
import { Sidebar } from "./Sidebar";
import { TempActions } from "./temp/TempActions";
import { TempBills } from "./temp/TempBills";
import { TempTransactions } from "./temp/TempTransactions";

// TODO: Replace temp elements with actual ones
const BaseLayoutElements: LayoutProps = {
	FirstRowElements: [<CardCarousel />, <TempBills />],
	SecondRowElements: [<WeeklyActivityChart />, <ExpenseStatistics />],
	ThirdRowElements: [<TempActions />, <TempTransactions />],
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
