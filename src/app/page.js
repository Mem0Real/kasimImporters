import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUniversity,
	faBookReader,
	faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

export default function Home() {
	return (
		<div className="pt-[4em]">
			{/* <section className="h-screen section relative">
				<div
					className="absolute hero w-full h-screen bg-fixed z-10 bg-no-repeat flex flex-col justify-center items-center"
					style={{
						backgroundImage: 'url("/assets/img/hero.jpg")',
						backgroundPositionY: "top-4",
					}}
				>
					<div className="bg-black/40 w-full min-h-[105%] absolute left-0 top-0"></div>
					<div className="flex flex-col gap-7 items-center brightness-100">
						<div className="bg-transparent w-full flex justify-center items-center gap-3 text-7xl font-bold ">
							<span className="text-lemon">Kasim Kemal</span>
							<span className="text-white">General Imports</span>
						</div>
						<div className="text-2xl text-white">
							<h1>LEADING POWER GENERATOR AND INDUSTRY MACHINE SUPPLY</h1>
						</div>
						<button className="px-5 py-3 rounded-xl bg-lemon text-white font-medium">
							Read More
						</button>
					</div>
				</div>
			</section> */}
			<header id="showcase">
				<div className="showcase-content">
					<h1 className="l-heading font-bold text-7xl">
						<span className="text-primary">Kasim Kemal</span> General Imports
					</h1>
					<p className="lead">
						LEADING POWER GENERATOR AND INDUSTRY MACHINE SUPPLY
					</p>
					<a href="#what" className="btn">
						Read More
					</a>
				</div>
			</header>
			<section id="what" className="py-12 bg-light">
				<div className="container">
					<h2 className="m-heading text-center">
						<span className="text-primary">What</span> We Do
					</h2>
					<div className="flex justify-center items-center">
						<div className="item">
							<span className="icon">
								<FontAwesomeIcon icon={faUniversity} size="2x" />{" "}
							</span>
							<div>
								<h3>Mission</h3>
								<p>
									To give A to Z solution for product's and projects we execute.
									Ensuring on time accomplishments and to the best of customers
									satisfaction.
								</p>
							</div>
						</div>
						<div className="item">
							<span className="icon">
								<FontAwesomeIcon icon={faBookReader} size="2x" />
							</span>
							<div>
								<h3>Vision</h3>
								<p>
									We are dedicated to be a dependable and reliable Power
									generator and industrial Machine supply company in Ethiopia by
									utilizing and the best available Technology and skilled person
									towards the satisfaction of our valuable customers.
								</p>
							</div>
						</div>
						<div className="item">
							<span className="icon">
								<FontAwesomeIcon icon={faPencilAlt} size="2x" />
							</span>
							<div>
								<h3>Core-values</h3>
								<p>
									- customers Satisfaction <br />
									- Accountability <br />
									- social Responsibility <br />
									- Efficiency <br />- Professional Ethics
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
