import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import FormField from "./common/Form/FormField";
import AvatarUpload from "./common/Form/AvatarUpload";
import Loader from "./common/Loaders/Loader";
type SettingsData = {
	yourName: string;
	userName: string;
	email: string;
	password: string;
	dateOfBirth: string;
	presentAddress: string;
	permanentAddress: string;
	city: string;
	postalCode: string;
	country: string;
};
const Settings = () => {
	const [activeTab, setActiveTab] = useState("edit-profile");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [profile, setProfile] = useState<SettingsData>({
		yourName: "Shaquile O’Neal",
		userName: "BigShaq",
		email: "BigS@gmail.com",
		password: "********",
		dateOfBirth: "25 January 1990",
		presentAddress: "San Jose, California, USA",
		permanentAddress: "San Jose, California, USA",
		city: "San Jose",
		postalCode: "45962",
		country: "USA",
	});
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value, type } = e.target as HTMLInputElement;

		setProfile((prev) => ({
			...prev,
			[name]:
				type === "checkbox"
					? (e.target as HTMLInputElement).checked
					: value,
		}));
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			console.log("Form submitted:", profile);
			alert("Profile updated successfully!");
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("Failed to update profile. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};
	return (
		<div className="p-6 lg:ml-64">
			<div className="grid grid-cols-1 gap-6">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col h-full bg-white rounded-lg shadow-sm overflow-hidden"
				>
					<Tabs
						value={activeTab}
						onValueChange={setActiveTab}
						className="w-full"
					>
						<TabsList className="flex border-b border-gray-200 px-4">
							<TabsTrigger
								value="edit-profile"
								className={`px-4 py-3 text-sm font-medium transition-colors relative ${
									activeTab === "edit-profile"
										? "text-blue-600"
										: "text-gray-500 hover:text-gray-700"
								}`}
								style={{
									borderBottom:
										activeTab === "edit-profile"
											? "2px solid #3b82f6"
											: "none",
								}}
							>
								Edit Profile
							</TabsTrigger>
							<TabsTrigger
								value="preferences"
								className={`px-4 py-3 text-sm font-medium transition-colors relative ${
									activeTab === "preferences"
										? "text-blue-600"
										: "text-gray-500 hover:text-gray-700"
								}`}
								style={{
									borderBottom:
										activeTab === "preferences"
											? "2px solid #3b82f6"
											: "none",
								}}
							>
								Preferences
							</TabsTrigger>
							<TabsTrigger
								value="security"
								className={`px-4 py-3 text-sm font-medium transition-colors relative ${
									activeTab === "security"
										? "text-blue-600"
										: "text-gray-500 hover:text-gray-700"
								}`}
								style={{
									borderBottom:
										activeTab === "security"
											? "2px solid #3b82f6"
											: "none",
								}}
							>
								Security
							</TabsTrigger>
						</TabsList>
						<TabsContent value="edit-profile" className="p-6">
							<div className="flex flex-col space-y-6">
								<div className="flex flex-col sm:flex-row gap-6 items-start">
									<AvatarUpload />
									<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
										<FormField label="Your Name">
											<input
												type="text"
												name="yourName"
												value={profile.yourName}
												onChange={handleChange}
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
											/>
										</FormField>
										<FormField label="User Name">
											<input
												type="text"
												name="userName"
												value={profile.userName}
												onChange={handleChange}
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
											/>
										</FormField>
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<FormField label="Email">
										<input
											type="email"
											name="email"
											value={profile.email}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
										/>
									</FormField>
									<FormField label="Password">
										<input
											type="password"
											name="password"
											value={profile.password}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
										/>
									</FormField>
									<FormField label="Date of Birth">
										<input
											type="date"
											name="dateOfBirth"
											value={profile.dateOfBirth}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
										/>
									</FormField>
									<FormField label="Present Address">
										<input
											type="text"
											name="presentAddress"
											value={profile.presentAddress}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
										/>
									</FormField>
									<FormField label="Permanent Address">
										<input
											type="text"
											name="permanentAddress"
											value={profile.permanentAddress}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
										/>
									</FormField>
									<FormField label="City">
										<input
											type="text"
											name="city"
											value={profile.city}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
										/>
									</FormField>
									<FormField label="Postal Code">
										<input
											type="text"
											name="postalCode"
											value={profile.postalCode}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
										/>
									</FormField>
									<FormField label="Country">
										<input
											type="text"
											name="country"
											value={profile.country}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
										/>
									</FormField>
								</div>
							</div>
						</TabsContent>
					</Tabs>
					<div className="mt-auto p-6 border-t border-gray-200 flex justify-end">
						<button
							type="submit"
							disabled={isSubmitting}
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSubmitting ? (
								<>
									<Loader
										size="sm"
										variant="secondary"
										className="mr-2"
									/>
									Saving...
								</>
							) : (
								"Save"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Settings;
