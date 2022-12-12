import { RiDribbbleLine } from "react-icons/ri";
import { FEATURES } from "./constant";

export default function Feature() {
	return (
		<>
			<section id="features">
				<div className="container mx-auto">
					<div>
						<h4
							className="
            uppercase text-lg text-gray-400 
            after:content-[''] 
            after:w-[120px] 
            after:h-[1px] 
            after:bg-[#ffde9e] 
            after:inline-block 
            after:my-2 after:mx-2 "
						>
							Retail Solution
						</h4>
						<h3 className="uppercase text-4xl font-bold">
							Amazing features. download <span>Here</span>
						</h3>
					</div>
					<div className="grid grid-cols-3 gap-4 my-10">
						{FEATURES.map((item) => (
							<div
								key={item.id}
								className="flex flex-col gap-3 items-center 
                border border-neutral-200 py-10 px-5 shadow-md 
                transition hover:-translate-y-3 hover:shadow-lg"
							>
								{item.icon}
								<h3 className="text-3xl">{item.title}</h3>
								<p className="text-center text-lg">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="custom-img2 bg-fixed mb-10">
				<div className="container mx-auto flex flex-col items-center gap-3 py-20 text-white">
					<h3 className="text-3xl font-medium">Send us your Requirement</h3>
					<p className="text-lg">
						If you require custom implementation based on your business needs,
						please send us an email. You are important to us.
					</p>
					<button className="border-2 border-white py-3 px-7 rounded-lg">
						Contact us
					</button>
				</div>
			</section>
		</>
	);
}
