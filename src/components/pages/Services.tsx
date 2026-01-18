import { useState } from "react";
import { 
	CreditCard, 
	Building2, 
	Send, 
	Receipt, 
	Smartphone, 
	Globe, 
	Shield, 
	FileText, 
	ArrowRight,
	CheckCircle2
} from "lucide-react";

interface Service {
	id: string;
	name: string;
	description: string;
	icon: React.ElementType;
	color: string;
	status: "active" | "available" | "coming_soon";
}

const services: Service[] = [
	{
		id: "1",
		name: "Card Services",
		description: "Manage virtual cards, set limits, and control spending",
		icon: CreditCard,
		color: "blue",
		status: "active",
	},
	{
		id: "2",
		name: "Bank Transfers",
		description: "Send money domestically and internationally",
		icon: Building2,
		color: "emerald",
		status: "active",
	},
	{
		id: "3",
		name: "Quick Pay",
		description: "Instant payments to contacts and businesses",
		icon: Send,
		color: "purple",
		status: "active",
	},
	{
		id: "4",
		name: "Bill Pay",
		description: "Pay all your bills from one place",
		icon: Receipt,
		color: "amber",
		status: "active",
	},
	{
		id: "5",
		name: "Mobile Wallet",
		description: "Add cards to Apple Pay and Google Pay",
		icon: Smartphone,
		color: "pink",
		status: "available",
	},
	{
		id: "6",
		name: "International",
		description: "Multi-currency accounts and global transfers",
		icon: Globe,
		color: "cyan",
		status: "available",
	},
	{
		id: "7",
		name: "Insurance",
		description: "Protect your assets with coverage plans",
		icon: Shield,
		color: "red",
		status: "coming_soon",
	},
	{
		id: "8",
		name: "Tax Documents",
		description: "Access tax forms and financial statements",
		icon: FileText,
		color: "gray",
		status: "active",
	},
];

const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
	blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200" },
	emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "border-emerald-200" },
	purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200" },
	amber: { bg: "bg-amber-50", icon: "text-amber-600", border: "border-amber-200" },
	pink: { bg: "bg-pink-50", icon: "text-pink-600", border: "border-pink-200" },
	cyan: { bg: "bg-cyan-50", icon: "text-cyan-600", border: "border-cyan-200" },
	red: { bg: "bg-red-50", icon: "text-red-600", border: "border-red-200" },
	gray: { bg: "bg-gray-50", icon: "text-gray-600", border: "border-gray-200" },
};

const Services = () => {
	const [selectedService, setSelectedService] = useState<string | null>(null);

	const activeServices = services.filter((s) => s.status === "active");
	const availableServices = services.filter((s) => s.status === "available");
	const comingSoonServices = services.filter((s) => s.status === "coming_soon");

	return (
		<div className="p-6 lg:ml-64">
			<div className="mb-8">
				<h2 className="text-xl font-semibold text-gray-900">Financial Services</h2>
				<p className="text-sm text-gray-500 mt-1">Explore and manage all your banking services</p>
			</div>

			<div className="mb-8">
				<h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Active Services</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{activeServices.map((service) => {
						const Icon = service.icon;
						const colors = colorClasses[service.color];
						return (
							<div
								key={service.id}
								className={`bg-white rounded-xl p-5 shadow-sm border-2 transition-all cursor-pointer ${
									selectedService === service.id ? colors.border : "border-transparent hover:border-gray-200"
								}`}
								onClick={() => setSelectedService(service.id)}
							>
								<div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
									<Icon className={`w-6 h-6 ${colors.icon}`} />
								</div>
								<div className="flex items-start justify-between">
									<div>
										<h4 className="font-semibold text-gray-900">{service.name}</h4>
										<p className="text-sm text-gray-500 mt-1">{service.description}</p>
									</div>
									<CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="mb-8">
				<h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Available to Activate</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{availableServices.map((service) => {
						const Icon = service.icon;
						const colors = colorClasses[service.color];
						return (
							<div
								key={service.id}
								className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-gray-200 transition-all"
							>
								<div className="flex items-center gap-4">
									<div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
										<Icon className={`w-6 h-6 ${colors.icon}`} />
									</div>
									<div className="flex-1">
										<h4 className="font-semibold text-gray-900">{service.name}</h4>
										<p className="text-sm text-gray-500">{service.description}</p>
									</div>
									<button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
										Activate
										<ArrowRight className="w-4 h-4" />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{comingSoonServices.length > 0 && (
				<div>
					<h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Coming Soon</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{comingSoonServices.map((service) => {
							const Icon = service.icon;
							const colors = colorClasses[service.color];
							return (
								<div
									key={service.id}
									className="bg-gray-50 rounded-xl p-5 border border-gray-100 opacity-75"
								>
									<div className="flex items-center gap-4">
										<div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center`}>
											<Icon className="w-6 h-6 text-gray-400" />
										</div>
										<div className="flex-1">
											<h4 className="font-semibold text-gray-600">{service.name}</h4>
											<p className="text-sm text-gray-400">{service.description}</p>
										</div>
										<span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-medium">
											Coming Soon
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default Services;
