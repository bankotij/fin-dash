export function TempStatistics() {
	return (
		<>
			<h2 className="text-lg font-semibold mb-4">Summary Statistics</h2>
			<div className="space-y-4">
				<div className="flex justify-between">
					<span className="text-gray-500">Total Balance</span>
					<span className="font-semibold">$24,518.00</span>
				</div>
				<div className="flex justify-between">
					<span className="text-gray-500">Monthly Income</span>
					<span className="font-semibold">$8,952.00</span>
				</div>
				<div className="flex justify-between">
					<span className="text-gray-500">Monthly Expenses</span>
					<span className="font-semibold">$5,283.00</span>
				</div>
			</div>
		</>
	);
}
