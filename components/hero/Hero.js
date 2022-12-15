import React from "react";
import { HERO_ITEMS } from "./constant";

const Hero = () => {
	return (
		<div id="/" className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center custom-img">
			<div className="absolute inset-0 bg-black/70 z-[2]" />
			<div className="container mx-auto z-[2] flex flex-col mt-10">
				<div className="text-white text-center">
					<h2 className="text-7xl">Tella.</h2>
					<h3 className="text-3xl">start Local, go Global</h3>
					<h4 className="text-3xl">Retail Solution for all Businesses</h4>
				</div>
				<div className="flex justify-center py-10">
					<div className="grid grid-cols-5 gap-6 w-4/5">
						{HERO_ITEMS.map(item=> (
							<div key={item.id} className="
							flex flex-col items-center 
							text-white border border-gray-400 
							p-5 space-y-2 group hover:border-blue-500
							transition duration-700 hover:scale-95
							">
								{item.icon}
								<h4 className="text-2xl group-hover:text-blue-300">{item.title}</h4>
								<h4 className="text-2xl  group-hover:text-blue-300">{item.description}</h4>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
