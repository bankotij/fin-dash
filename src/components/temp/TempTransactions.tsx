export function TempTransactions() {
	return (
		<>
			<h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
			<div className="space-y-4">
				{[1, 2, 3, 4].map((item) => (
					<div
						key={item}
						className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
					>
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-blue-600"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.5l-1.7-1.7A1 1 0 0012.3 2H7.7a1 1 0 00-.7.3L5.3 4H4zm7 5a2 2 0 100 4 2 2 0 000-4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div>
								<p className="font-medium">Amazon Purchase</p>
								<p className="text-sm text-gray-500">
									Oct 24, 2024
								</p>
							</div>
						</div>
						<span className="font-semibold text-red-500">
							-$84.99
						</span>
					</div>
				))}
			</div>
		</>
	);
}
