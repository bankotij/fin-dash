export function TempBills() {
	return (
		<>
			<h2 className="text-lg font-semibold mb-4">Upcoming Bills</h2>
			<div className="space-y-4">
				<div className="p-3 bg-gray-50 rounded-lg">
					<div className="flex justify-between mb-1">
						<span className="font-medium">Netflix</span>
						<span className="text-gray-500">$12.99</span>
					</div>
					<p className="text-sm text-gray-500">Due in 3 days</p>
				</div>
				<div className="p-3 bg-gray-50 rounded-lg">
					<div className="flex justify-between mb-1">
						<span className="font-medium">Internet</span>
						<span className="text-gray-500">$59.99</span>
					</div>
					<p className="text-sm text-gray-500">Due in 7 days</p>
				</div>
				<div className="p-3 bg-gray-50 rounded-lg">
					<div className="flex justify-between mb-1">
						<span className="font-medium">Electric Bill</span>
						<span className="text-gray-500">$87.50</span>
					</div>
					<p className="text-sm text-gray-500">Due in 14 days</p>
				</div>
			</div>
		</>
	);
}
