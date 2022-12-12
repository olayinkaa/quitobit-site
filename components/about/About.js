import { RiCheckDoubleLine } from "react-icons/ri";
import Image from "next/image";
import { SERVICES_LEFT, SERVICES_RIGHT } from "./constant";

export default function About() {
	return (
		<div className="container mx-auto my-10">
			<section className="flex justify-between">
				<div className="flex flex-col">
					<h4 className="text-3xl font-bold">Gbikna Limited.</h4>
					<h5 className="text-lg ">We offer the following services: </h5>
					<div className="flex flex-col gap-3">
						{SERVICES_LEFT.map((item) => (
							<div key={item.id} className="flex items-center gap-3">
								<RiCheckDoubleLine fontSize={25} className="text-blue-500" />
								<span className="text-lg">{item.title}</span>
							</div>
						))}
					</div>
				</div>
				<div>
					<Image
						src="/assets/images/about.png"
						alt="about us"
						width="500"
						height="700"
						className="object-cover h-full w-full"
					/>
				</div>
			</section>
			<section className="flex justify-between mt-16">
				<div>
					<Image
						src="/assets/images/payment.png"
						alt="about us"
						width="500"
						height="700"
						className="object-cover h-full w-full"
					/>
				</div>
				<div className="flex flex-col gap-10">
                    {SERVICES_RIGHT.map(item=> (
                        <div key={item.id} className="flex gap-4">
                            {item.icon}
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl font-medium text-gray-700">
                                    {item.title}
                                </h4>
                                <h5 className="text-lg text-gray-500 w-4/5">
                                 {item.description}
                                </h5>
                            </div>
                        </div>
                    ))} 
				</div>
			</section>
		</div>
	);
}
