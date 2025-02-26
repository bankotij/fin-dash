export interface AlertProps {
	type: string;
	message: string;
}

export function Alert({ type, message }: AlertProps) {
	switch (type) {
		case "success":
			return (
				<>
					<div
						id="alert-1"
						className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
						role="alert"
					>
						<div
							className="text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
							role="alert"
						>
							{message}
						</div>
						<button
							type="button"
							className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
							data-dismiss-target="#alert-1"
							aria-label="Close"
						>
							<span className="sr-only">Close</span>
							<svg
								className="w-3 h-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
						</button>
					</div>
				</>
			);
		case "error":
			return (
				<>
					<div
						id="alert-2"
						className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
						role="alert"
					>
						<div
							className="text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
							role="alert"
						>
							{message}
						</div>
						<button
							type="button"
							className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
							data-dismiss-target="#alert-2"
							aria-label="Close"
						>
							<span className="sr-only">Close</span>
							<svg
								className="w-3 h-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
						</button>
					</div>
				</>
			);
		default:
			return <></>;
	}
}
