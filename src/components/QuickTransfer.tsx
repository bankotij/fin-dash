import { useState } from "react";
import { Send, User } from "lucide-react";
import { SAMPLE_USERS } from "../utils/mock/mockData";
import { Alert, AlertProps } from "./common/Alert";

export const QuickTransfer = () => {
	const [selectedUser, setSelectedUser] = useState<string | null>(null);
	const [alert, setAlert] = useState<AlertProps | null>(null);
	const [amount, setAmount] = useState<string>("");

	const handleSend = () => {
		if (!selectedUser || !amount) {
			setAlert({
				type: "error",
				message: "Please select a user and enter an amount",
			});
			return;
		}

		const selectedUserData = SAMPLE_USERS.find(
			(user) => user.id === selectedUser
		);
		setAlert({
			type: "success",
			message: `Sending $${amount} to ${selectedUserData?.name}`,
		});
	};

	return (
		<>
			<h2 className="text-lg font-semibold">Quick Transfer</h2>
			<div className="p-4 sm:p-6 space-y-6">
				{alert && <Alert {...alert}></Alert>}
				<div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 -mx-4 sm:mx-0 px-4 sm:px-0 scrollbar">
					{SAMPLE_USERS.map((user) => (
						<button
							key={user.id}
							onClick={() => setSelectedUser(user.id)}
							className={`flex flex-col items-center m-2 space-y-2 min-w-[100px] sm:min-w-[120px] p-3 rounded-xl transition-all duration-200 ${
								selectedUser === user.id
									? "bg-blue-50 ring-2 ring-blue-500 shadow-md scale-105 transform"
									: "hover:bg-gray-50 hover:shadow-sm"
							}`}
						>
							<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-inner">
								<User className="w-full h-full object-cover transform transition-transform group-hover:scale-110" />
							</div>
							<div className="text-center">
								<p className="font-semibold text-gray-900 text-sm truncate max-w-[90px] sm:max-w-[110px]">
									{user.name}
								</p>
								<p className="text-blue-500 text-xs sm:text-sm">
									{user.role}
								</p>
							</div>
						</button>
					))}
				</div>

				<div className="flex flex-col  gap-3 sm:gap-2">
					<div className="relative flex-1">
						<label className="absolute -top-2 left-3 text-xs sm:text-sm text-gray-500 bg-white px-1">
							Write Amount
						</label>
						<input
							type="number"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							className="w-full h-12 sm:h-14 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="525.50"
						/>
					</div>
					<button
						onClick={handleSend}
						className="h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-gray-900 text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
					>
						Send
						<Send className="w-4 h-4" />
					</button>
				</div>
			</div>
		</>
	);
};
