export function TempActions() {
	return (
		<>
			<h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
			<div className="space-y-3">
				<button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
					Transfer Money
				</button>
				<button className="w-full py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
					Pay Bills
				</button>
				<button className="w-full py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
					Add Card
				</button>
			</div>
		</>
	);
}
