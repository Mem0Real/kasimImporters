import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUniversity,
	faBookReader,
	faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

import ImageDispenser from "./components/ImageDispenser";

export default function Home() {
	const __dirName = "/assets/img";

	return (
		<div className="min-h-screen w-full bg-white pt-[4em]">
			{/* Hero */}

			<header
				id="showcase"
				className="min-h-screen w-full flex flex-col bg-no-repeat bg-center"
				style={{
					background: 'url("/assets/img/background.jpg") center/cover',
				}}
			>
				<div className=" bg-black/60 h-screen z-10 flex flex-col justify-center items-center gap-4 md:gap-6 text-neutral-200">
					<h1
						className="font-bold text-6xl md:text-5xl lg:text-7xl flex flex-col items-center gap-3"
						style={{ lineHeight: 1.1 }}
					>
						<div className="text-lemon text-center self-center">
							Kasim Kemal <br />
							<span className="text-neutral-200 text-center">
								General Imports
							</span>
						</div>

						{/* </span> */}
					</h1>
					<p className="text-lg md:text-2xl font-black text-center">
						LEADING POWER GENERATOR AND INDUSTRY MACHINE SUPPLY
					</p>
					<a
						href="#what"
						className=" inline-block bg-lemon px-4 py-2 border-none rounded-md hover:bg-darkLemon"
					>
						Read More
					</a>
				</div>
			</header>

			{/* What We Do */}
			<section
				id="what"
				className="py-12 bg-light flex flex-col justify-center items-center h-full gap-3 xl:gap-6"
			>
				<div className="container">
					<h2 className="m-heading text-center py-5">
						<div className="text-4xl font-semibold">
							<span className="text-lemon">What </span>
							<span className="text-neutral-800">We Do</span>
						</div>
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-y-5 lg:gap-y-12">
						<div className="flex justify-start items-start gap-4 px-3">
							<span className="icon self-center md:-mt-32 lg:-mt-24 bg-darkLemon rounded-full p-3">
								<FontAwesomeIcon icon={faUniversity} size="2x" />
							</span>
							<div className=" flex flex-col justify-start items-start">
								<h3 className="py-2 font-bold text-lg">Mission</h3>
								<p>
									To give A to Z solution for product's and projects we execute.
									Ensuring on time accomplishments and to the best of customers
									satisfaction.
								</p>
							</div>
						</div>
						<div className="flex justify-start items-start gap-4 px-3">
							<span className="icon self-center md:-mt-32 lg:-mt-24 bg-darkLemon rounded-full p-3">
								<FontAwesomeIcon icon={faBookReader} size="2x" />
							</span>
							<div className="">
								<h3 className="py-2 font-bold text-lg">Vision</h3>
								<p>
									We are dedicated to be a dependable and reliable Power
									generator and industrial Machine supply company in Ethiopia by
									utilizing and the best available Technology and skilled person
									towards the satisfaction of our valuable customers.
								</p>
							</div>
						</div>
						<div className="flex justify-start items-start gap-4 px-3">
							<span className="icon self-center md:-mt-32 lg:-mt-24 bg-darkLemon rounded-full p-3">
								<FontAwesomeIcon icon={faPencilAlt} size="2x" />
							</span>
							<div className="">
								<h3 className="py-2 font-bold text-lg">Core-values</h3>
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

			{/* Who We Are */}
			<section className="bg-neutral-800 min-h-[90vh] w-full flex flex-col md:flex-row justify-between items-start">
				<div className="basis-1/2 w-full">
					<div className="relative w-[100vw] md:w-[50vw] h-[90vh]">
						<Image
							src={`${__dirName}/Banner.jpg`}
							fill
							alt="banner"
							className="absolute object-cover object-center"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</div>
				<div className="basis-1/2 w-full p-5">
					<div className="flex flex-col justify-center items-start p-3 gap-4">
						<div className="text-4xl font-semibold">
							<span className="text-lemon">Who </span>
							<span className="text-neutral-200">We Are</span>
						</div>
						<p className="text-base text-neutral-400">
							Kasim Kemal General Imports , prides itself on being one of the
							leading companies in the Supply, and Maintenance of Diesel power,
							petroleum generators & Industry Machine supply in Ethiopia .
							Established in 2010G. C , we consider ourselves as one of the best
							supply in The capital of Africa Ethiopia.
						</p>
						<h4 className="font-semibold text-xl text-neutral-300">
							Our Ventures
						</h4>
						<ul className="w-full text-start text-neutral-400 pl-5">
							<li className="list-disc border-b border-dotted border-neutral-400/30 py-2 text-lg font-light">
								Power Generator from small size to the big
							</li>
							<li className="list-disc border-b border-dotted border-neutral-400/30 py-2 text-lg font-light">
								Water pump surface and submersible
							</li>
							<li className="list-disc border-b border-dotted border-neutral-400/30 py-2 text-lg font-light">
								Air Compersser from 25 liter to 1000 liter capacity
							</li>
							<li className="list-disc border-b border-dotted border-neutral-400/30 py-2 text-lg font-light">
								Solar water pump
							</li>
							<li className="list-disc border-b border-dotted border-neutral-400/30 py-2 text-lg font-light">
								Power tools
							</li>
							<li className="list-disc border-b border-dotted border-neutral-400/30 py-2 text-lg font-light">
								Mechanical work shops Tools
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="w-full h-fit pt-2 pb-16 lg:py-8 bg-white md:lg:space-y-8 lg:space-y-16 ">
				<div className="flex flex-col justify-center items-center pb-16 pt-5">
					<div className="text-4xl font-semibold">
						<span className="text-lemon">Our </span>
						<span className="text-neutral-800">Clients</span>
					</div>
				</div>

				<div className="grid grid-rows-2 grid-cols-3 gap-x-12 gap-y-24 lg:gap-y-56 justify-items-center">
					<ImageDispenser imageName="1" />
					<ImageDispenser imageName="2" />
					<ImageDispenser imageName="3" />
					<ImageDispenser imageName="4" />
					<ImageDispenser imageName="5" />
					<ImageDispenser imageName="6" />
				</div>
			</section>

			<section className="w-full bg-stone-700  py-20 lg:py-12">
				<div className="w-full flex flex-col justify-center items-center gap-12">
					<div className="text-4xl font-semibold">
						<span className="text-neutral-200">Why Choose </span>
						<span className="text-lemon">Us?</span>
					</div>
					<div className="w-full flex justify-evenly items-center">
						<ImageDispenser imageName="1" icons title="Hard Working" />
						<ImageDispenser imageName="2" icons title="Professional" />
						<ImageDispenser imageName="3" icons title="Organized" />
					</div>
				</div>
			</section>
		</div>
	);
}
