import Image from "next/image";
import React from "react";

export default function AboutUs() {
	const __dirName = "/assets/img/services";
	return (
		<div className="min-h-screen w-full bg-neutral-300 pt-[4em]">
			<div
				className="h-[65vh] w-full flex flex-col justify-center items-start bg-center"
				style={{
					background: 'url("/assets/img/about-bg.jpg") no-repeat center/cover',
				}}
			>
				<div className="bg-stone-700/50 w-full min-h-[75vh] flex justify-center items-center">
					<div className="max-w-[90vw] xl:max-w-[1100px] flex justify-center md:justify-start items-center">
						<div className="px-2 md:px-4 w-11/12 md:w-7/12 flex flex-col gap-3 justify-center items-start text-neutral-200">
							<h4 className="hidden md:block bg-[#F89400] p-1.5 px-2 text-xs rounded-xl">
								READ
							</h4>
							<h2 className="font-black text-3xl">About-Us</h2>
							<p className="text-xl">
								We are a dedicated team of importers, committed to sourcing
								high-quality products from around the world. With years of
								experience we strive to provide our customers with the best
								products and exceptional service.
							</p>
							<button className="hidden md:block px-5 py-2 bg-red-600 rounded-lg font-light">
								Read More
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="pt-12 space-y-2">
				<div className="mt-10 w-[80vw] md:w-[90vw] lg:w-[95vw] xl:w-[75vw] xl:max-w-[1100px] md:px-8 lg:px-2 text-2xl font-black text-neutral-800 mx-auto grid grid-cols-1">
					Our Services
				</div>
				<div className="w-[80vw] md:w-[90vw] lg:w-[95vw] xl:w-[75vw] xl:max-w-[1100px] mx-auto grid grid-cols-1 grid-flow-col md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-7 md:grid-rows-4 lg:grid-rows-3 md:gap-x-4 xl:gap-x-16 gap-y-6 md:gap-y-2 lg:gap-y-4 xl:pr-16">
					<div className="h-full px-2 md:px-4 lg:px-2 py-5 bg-white lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
						{/* Image */}
						<div className="h-[15em] md:h-[20em] lg:h-[100%] xl:h-full w-[100%] relative">
							<Image
								src={`${__dirName}/1.jpg`}
								fill
								alt="satisfaction"
								className="absolute object-contain object-center"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						{/* Text */}
						<div className="px-2 grid grid-cols-1 items-center md:items-start place-items-start place-content-center gap-y-2">
							<div>
								<p className="bg-purple-500 rounded-full text-[10px] p-2 text-neutral-200">
									SATISFACTION
								</p>
							</div>
							<div>
								<h2 className="text-lg font-black text-neutral-800">
									PROVIDING
								</h2>
							</div>
							<div>
								<p className="text-base text-neutral-800">
									Our mission is to bring the finest products from around the
									world to our customers, ensuring their satisfaction and
									delight.
								</p>
							</div>
						</div>
					</div>
					<div className="h-fit md:h-full p-4 grid grid-cols-1 items-center md:items-start place-items-start place-content-start gap-y-2 bg-[#333] text-neutral-200 ">
						<div>
							<p className="bg-yellow-500 rounded-full text-[10px] p-2">
								INNOVATIVE
							</p>
						</div>
						<div>
							<h2 className="text-lg font-black">BEING UNIQUE</h2>
						</div>
						<div>
							<p className="text-base">
								We have a deep passion for discovering unique and innovative
								products that are not easily found in local markets, offering
								our customers a truly exceptional shopping experience.
							</p>
						</div>
					</div>
					<div className="min-h-[60vh]  bg-white"></div>
					<div className="min-h-[60vh]  bg-white"></div>
					<div className="min-h-[60vh]  bg-red-400"></div>
					<div className="hidden lg:block"></div>
					<div className="h-full col-span-2 px-2 md:px-4 lg:px-2 py-5 bg-white lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
						{/* Text */}
						<div className="px-2 grid grid-cols-1 items-center md:items-start place-items-start place-content-center gap-y-2">
							<div>
								<p className="bg-purple-500 rounded-full text-[10px] p-2 text-neutral-200">
									RELATIONS
								</p>
							</div>
							<div>
								<h2 className="text-lg font-black text-neutral-800">
									FAMILIAR SERVICES
								</h2>
							</div>
							<div>
								<p className="text-base text-neutral-800">
									We believe in building long-term relationships with our
									customers. Through personalized communication and attentive
									customer support, we aim to create a loyal customer base that
									trusts and relies on us for their import needs.
								</p>
							</div>
						</div>
						{/* Image */}
						<div className="h-[5em] md:h-[15em] lg:h-[100%] xl:h-[15em] w-[100%] relative self-center">
							<Image
								src={`${__dirName}/3.jpg`}
								fill
								alt="satisfaction"
								className="absolute object-contain object-center"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
