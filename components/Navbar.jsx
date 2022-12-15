import { useState, useEffect } from "react";
// import Link from "next/link";
import Image from "next/image";
import { Link } from "react-scroll";

const MENU = [
	{ id: 1, title: "Home", to: "/" },
	{ id: 2, title: "About", to: "about" },
	{ id: 3, title: "Feature", to: "features" },
	{ id: 4, title: "Contact", to: "contact" },
];
export default function Navbar() {
	const [color, setColor] = useState("transparent");

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor("#000000");
			} else {
				setColor("transparent");
			}
		};
		window.addEventListener("scroll", changeColor);
		// return ()=> window.removeEventListener('scroll', changeColor)
	});

	return (
		<div
			style={{ backgroundColor: `${color}` }}
			className="fixed top-0 left-0 w-full z-[10] ease-in duration-500"
		>
			<div
				id="home"
				className="container mx-auto text-white flex items-center justify-between py-4"
			>
				<Link
					to="/"
					spy={true}
					smooth={true}
					offset={-100}
					duration={300}
					delay={0}
					className="cursor-pointer"
				>
					<Image
						src="/assets/images/logo.png"
						alt="quitobit hero image"
						width="200"
						height="200"
					/>
				</Link>
				<ul className="flex gap-6">
					{MENU.map((item) => (
						<li key={item.id} className="uppercase cursor-pointer">
							<Link
								// activeClass="active"
								to={item.to}
								spy={true}
								smooth={true}
								offset={-100}
								duration={300}
								delay={0}
							>
								{item.title}
							</Link>
							{/* <Link href={item.to}>{item.title}</Link> */}
						</li>
					))}
				</ul>
				<button
					className="border-2 border-blue-500 px-5 py-2 rounded-sm"
					disabled
				>
					Sign up / Download
				</button>
			</div>
		</div>
	);
}
