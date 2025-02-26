import Header from "../Navigation/Header";
import { BaseLayoutCard } from "./BaseLayoutCard";

export type LayoutProps = {
	FirstRowElements: React.ReactElement[];
	SecondRowElements: React.ReactElement[];
	ThirdRowElements: React.ReactElement[];
};

export const Layout = ({
	FirstRowElements,
	SecondRowElements,
	ThirdRowElements,
}: LayoutProps) => {
	return (
		<>
			<Header />
			<div className="p-6 lg:ml-64">
				<div className="grid grid-cols-1 gap-6">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						{FirstRowElements.map((element, index) => (
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
						{SecondRowElements.map((element, index) => (
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
						{ThirdRowElements.map((element, index) => (
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
