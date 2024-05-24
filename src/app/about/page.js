import Image from "next/image";
import React from "react";

export default function About() {
	const __dirName = "/assets/img/services";

	return (
		<div className="w-full flex flex-col justify-center items-center pt-[4em]">
			<div
				className="h-[65vh] w-full flex flex-col justify-center items-start bg-center"
				style={{
					background: 'url("/assets/img/about-bg.jpg") no-repeat center/cover',
				}}
			>
				<div className="bg-gray-700/40 w-full h-[75vh] px-36 ">
					<div className="w-full flex flex-col gap-3 justify-center items-start text-white bg-black-40 pt-12 pb-6 pr-96 pl-6">
						<h4 className="bg-yellow-600 p-1.5 px-2 text-sm rounded-xl">
							Read
						</h4>
						<h2 className="font-black text-3xl">About-Us</h2>
						<p className="text-xl">
							We are a dedicated team of importers, committed to sourcing
							high-quality products from around the world. With years of
							experience we strive to provide our customers with the best
							products and exceptional service.
						</p>
						<button className="px-5 py-2 bg-red-600 rounded-lg font-light">
							Read More
						</button>
					</div>
				</div>
			</div>
			<div className="h-full w-full bg-neutral-300 flex flex-col justify-center items-center">
				<div className="my-8 w-[78vw] flex flex-col justify-center items-center gap-2">
					<h1 className="w-full text-2xl font-black text-neutral-800">
						Our Services
					</h1>
					<div className="w-full flex gap-x-20 gap-y-6 flex-wrap">
						<div className="h-[60vh] basis-2/3 flex bg-white">
							<div className="py-4 px-5 w-full flex gap-3 items-center">
								<div className="basis-1/2 h-80 w-72 relative">
									<Image
										src={`${__dirName}/1.jpg`}
										fill
										alt="satisfaction"
										className="absolute object-cover object-center"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<div className="basis-1/2 flex flex-col gap-2 justify-center items-start">
									<div>
										<p className="bg-purple-500 rounded-xl text-xs p-2 text-neutral-200">
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
											Our mission is to bring the finest products from around
											the world to our customers, ensuring their satisfaction
											and delight.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="h-[60vh] basis-1/4 flex bg-stone-800 text-neutral-200">
							<div className="py-4 px-5 w-full flex justify-evenly items-start">
								<div className="flex flex-col gap-4 justify-center items-start">
									<div>
										<p className="bg-yellow-500 rounded-xl  text-xs p-2">
											INNOVATIVE
										</p>
									</div>
									<div>
										<h2 className="text-lg font-black">BEING UNIQUE</h2>
									</div>
									<div>
										<p className="text-base">
											We have a deep passion for discovering unique and
											innovative products that are not easily found in local
											markets, offering our customers a truly exceptional
											shopping experience.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="h-[72vh] basis-2/3 flex gap-16">
							<div className="basis-1/2 flex gap-1 bg-white">
								<div className="py-4 px-5 w-full flex flex-col gap-3 items-center">
									<div className="basis-1/2 flex flex-col gap-2 justify-center items-start">
										<div>
											<p className="bg-yellow-500 rounded-xl text-xs p-2 text-neutral-200">
												EXPERIENCED
											</p>
										</div>
										<div>
											<h2 className="text-lg font-black text-neutral-800">
												MANY SUPPLIERS
											</h2>
										</div>
										<div>
											<p className="text-base text-neutral-800">
												With years of experience in the import industry, we have
												developed strong relationships with reliable suppliers,
												enabling us to consistently deliver high-quality
												products to our customers.
											</p>
										</div>
									</div>
									<div className="basis-1/2 h-80 w-72 relative">
										<Image
											src={`${__dirName}/2.jpg`}
											fill
											alt="satisfaction"
											className="absolute object-cover object-center"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
								</div>
							</div>
							<div className="basis-1/2 flex flex-col bg-white">
								<div className="basis-1/2 h-80 w-full relative">
									<Image
										src={`${__dirName}/4.jpg`}
										fill
										alt="satisfaction"
										className="absolute object-cover object-center"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<div className="py-4 px-5 w-full flex flex-col gap-3 items-center">
									<div className="basis-1/2 flex flex-col gap-2 justify-center items-start">
										<div>
											<p className="bg-blue-500 rounded-xl text-xs p-2 text-neutral-200">
												QUALTIY
											</p>
										</div>
										<div>
											<h2 className="text-lg font-black text-neutral-800">
												CUSTOMER TRUST
											</h2>
										</div>
										<div>
											<p className="text-base text-neutral-800">
												We understand the importance of quality control and
												ensure that all products go through rigorous testing and
												inspection before they reach our customers' hands.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="h-[72vh] basis-1/4 flex bg-red-600 text-neutral-200">
							<div className="py-4 px-5 w-full flex justify-evenly items-start">
								<div className="flex flex-col gap-4 justify-center items-start">
									<div>
										<p className="bg-yellow-500 rounded-xl  text-xs p-2">
											HONEST
										</p>
									</div>
									<div>
										<h2 className="text-lg font-black">BEST/FAIR PRICE</h2>
									</div>
									<div>
										<p className="text-base">
											We value transparency and honesty in our business
											practices, providing our customers with accurate product
											information and fair pricing.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex w-full pl-16 pr-3">
							<div className="hidden md:flex basis-1/3"></div>
							<div className="h-[48vh] basis-2/3 flex bg-white">
								<div className="py-4 pl-5 w-full flex gap-3 justify-between items-center">
									<div className="basis-1/2 flex flex-col gap-2 justify-center items-start">
										<div>
											<p className="bg-purple-500 rounded-xl text-xs p-2 text-neutral-200">
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
												Our mission is to bring the finest products from around
												the world to our customers, ensuring their satisfaction
												and delight.
											</p>
										</div>
									</div>
									<div className="basis-1/2 h-72 w-72 relative">
										<Image
											src={`${__dirName}/3.jpg`}
											fill
											alt="satisfaction"
											className="absolute object-cover object-center"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
