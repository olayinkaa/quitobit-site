import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const [color, setColor] = useState("transparent")

	useEffect(()=> {
		const changeColor = ()=>{
			if(window.scrollY >= 90){
				setColor('#000000')
			} else {
				setColor('transparent')
			}
		}
		window.addEventListener('scroll', changeColor)

		// return ()=> window.removeEventListener('scroll', changeColor)
	})

	return (
		<div style={{backgroundColor:`${color}`}} className="fixed top-0 left-0 w-full z-[10] ease-in duration-500">
			<div id="home" className="container mx-auto text-white flex items-center justify-between py-4">
				<Link href="/">
					<Image
						src="/assets/images/logo.png"
						alt="quitobit logog"
						width="200"
						height="200"
					/>
				</Link>
				<ul className="flex gap-6">
					<li>
						<Link href="/">Home</Link>
					</li>{" "}
					<li>
						<Link href="/#about">About</Link>
					</li>{" "}
					<li>
						<Link href="/#features">Features</Link>
					</li>{" "}
					<li>
						<Link href="/#contact">Contact</Link>
					</li>
				</ul>
                <button className="border-2 border-blue-500 px-5 py-2 rounded-sm">
                    Sign up / Download
                </button>
			</div>
		</div>
	);
};

export default Navbar;
