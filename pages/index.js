import Meta from "../components/Meta";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Feature from "../components/feature/Feature"
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
	return (
		<div >
			<Meta />
			<Hero />
			<About/>
			<Feature/>
			<Contact/>
			<Footer/>
		</div>
	);
}
