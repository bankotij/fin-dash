import { ClipboardCheck } from "lucide-react";

export function SoarTask() {
	return (
		<div className="flex items-center gap-2">
			<div className="text-white p-2 rounded">
				<ClipboardCheck className="" fill="0"/>
			</div>
			<h1 className="text-xl font-extrabold text-gray-800">Soar Task</h1>
		</div>
	);
}
