import { BalanceHistoryTracker } from "../BalanceHistory";
import { CardCarousel } from "../Card/CardCarousel";
import { ExpenseStatistics } from "../Charts/ExpenseStatistics";
import { RecentTransactions } from "../Charts/RecentTransactions";
import { WeeklyActivityChart } from "../Charts/WeeklyExpenseChart";
import { QuickTransfer } from "../QuickTransfer";
import { BaseLayoutCard } from "./BaseLayoutCard";

const BaseLayoutElements: LayoutProps = {
	FirstRowElements: [<CardCarousel />, <RecentTransactions />],
	SecondRowElements: [<WeeklyActivityChart />, <ExpenseStatistics />],
	ThirdRowElements: [<QuickTransfer />, <BalanceHistoryTracker />],
};

type LayoutProps = {
	FirstRowElements: React.ReactElement[];
	SecondRowElements: React.ReactElement[];
	ThirdRowElements: React.ReactElement[];
};

export const Layout = () => {
	return (
		<>
			<div className="p-6 lg:ml-64">
				<div className="grid grid-cols-1 gap-6">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						{BaseLayoutElements.FirstRowElements.map((element, index) => (
							<div
								key={`first-row-${index}`}
								className={`${
									index === 0
										? "lg:col-span-2"
										: "lg:col-span-1"
								}`}
							>
								{<BaseLayoutCard children={element} />}
							</div>
						))}
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						{BaseLayoutElements.SecondRowElements.map((element, index) => (
							<div
								key={`second-row-${index}`}
								className={`${
									index === 0
										? "lg:col-span-2"
										: "lg:col-span-1"
								}`}
							>
								{<BaseLayoutCard children={element} />}
							</div>
						))}
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
						{BaseLayoutElements.ThirdRowElements.map((element, index) => (
							<div
								key={`third-row-${index}`}
								className={`${
									index === 0
										? "lg:col-span-4"
										: "lg:col-span-6"
								}`}
							>
								{<BaseLayoutCard children={element} />}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
