import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
	return (
		<>
			<div className="bg-[#343a40] text-white py-10">
				<div className="container mx-auto flex gap-20">
					<div className="space-y-3">
						<h3 className="text-2xl">GBIKNA</h3>
						<h5>10 Baruwa Street, Lekki, Lagos, Nigeria</h5>
						<h4>
							Phone: <span>+234 7066 0000 44</span>
						</h4>
						<h4>
							Email: <span>info@gbikna.com</span>
						</h4>
						<div className="flex gap-4">
							<FaTwitterSquare fontSize={30} />
							<FaTwitterSquare fontSize={30} />
							<FaTwitterSquare fontSize={30} />
							<FaTwitterSquare fontSize={30} />
						</div>
					</div>
					<div className="space-y-3">
						<h4 className="text-2xl">Our Newsletter</h4>
						<h5 className="text-lg">Kindly subscripe to our Newsletters</h5>
						<div>
							<input type="text" className="rounded-l-md focus:outline-none focus:ring-0 text-black" />
							<button className="bg-blue-400 text-white py-2 px-4">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black text-white py-6">
				<div className="flex justify-center">
					<p>&copy; Copyright Quitobit. All Rights Reserved</p>
				</div>
			</div>
		</>
	);
}
