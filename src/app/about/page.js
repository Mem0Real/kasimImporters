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
			<div className="h-full w-full bg-neutral-300 flex flex-col justify-center items-center">
				<div className="max-w-[90vw] xl:max-w-[1100px] flex flex-col justify-center items-center">
					<div className="w-full md:px-4 flex flex-col justify-center items-center gap-5 md:gap-2">
						<h1 className="w-full text-2xl font-black text-neutral-800">
							Our Services
						</h1>
						<div className="w-full flex flex-col md:flex-row gap-x-6 xl:gap-x-20 gap-y-6">
							<div className="basis-3/4 md:basis-1/2 lg:basis-3/4 min-h-[30em] md:min-h-[35em] lg:min-h-96 w-full flex bg-white">
								<div className="w-full flex flex-col lg:flex-row gap-4 md:gap-1 items-center">
									<div className="py-4 pr-3 basis-4/5 w-[100%] h-[100%] lg:size-80 relative">
										<Image
											src={`${__dirName}/1.jpg`}
											fill
											alt="satisfaction"
											className="absolute object-contain object-center"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
									<div className="px-4 py-2 w-full basis-1/2 flex flex-col gap-2 justify-center items-start">
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
											<h2 className="text-lg font-black text-neutral-800">
												PROVIDING
											</h2>
										</div>
									</div>
								</div>
							</div>

							<div className="w-full min-h-96 basis-1/4 md:basis-1/2 lg:basis-1/4 flex bg-stone-800 text-neutral-200">
								<div className="py-4 px-5 w-full flex justify-evenly items-start">
									<div className="flex flex-col gap-4 justify-center items-start">
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
												We have a deep passion for discovering unique and
												innovative products that are not easily found in local
												markets, offering our customers a truly exceptional
												shopping experience.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex flex-col md:flex-row gap-x-6 lg:gap-x-7 xl:gap-x-20 gap-y-6">
							<div className="h-[26em] lg:w-[35%] w-full flex gap-1 bg-white">
								<div className="py-4 px-5 w-full flex flex-col gap-3 items-center">
									<div className="basis-1/2 flex flex-col gap-2 justify-center items-start">
										<div>
											<p className="bg-yellow-500 rounded-full text-[10px] p-2 text-neutral-200">
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
									<div className="py-4 pr-3 basis-4/5 w-[100%] h-[100%] lg:size-64 relative">
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
							<div className="h-[26em] lg:w-[35%] px-5 py-4 w-full flex flex-col gap-3 items-center bg-white">
								<div className="basis-1/2 py-4 pr-3 w-[100%] h-[100%] lg:size-64 relative">
									<Image
										src={`${__dirName}/4.jpg`}
										fill
										alt="satisfaction"
										className="absolute object-cover object-center"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<div className="basis-1/2 flex flex-col gap-2 justify-center items-start">
									<div className="basis-1/2 flex flex-col gap-2 justify-center items-start">
										<div>
											<p className="bg-blue-500 rounded-full text-[10px] p-2 text-neutral-200">
												QUALITY
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

							<div className="w-full h-[26em] basis-1/4 flex bg-red-600 text-neutral-200">
								<div className="py-4 px-5 w-full flex justify-evenly items-start">
									<div className="flex flex-col gap-4 justify-center items-start">
										<div>
											<p className="bg-yellow-500 rounded-full text-[10px] p-2">
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

							{/* <div className="h-[26em] lg:w-[35%] px-5 py-4 w-full flex flex-col gap-3 items-center bg-white">
								<div className="basis-1/2 flex flex-col gap-2 justify-center items-start">
									<div className="basis-1/2 flex flex-col gap-2 justify-center items-start">
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
												customers. Through personalized communication and
												attentive customer support, we aim to create a loyal
												customer base that trusts and relies on us for their
												import needs.
											</p>
										</div>
									</div>
								</div>
								<div className="basis-1/2 py-4 pr-3 w-[100%] h-[100%] lg:size-64 relative">
									<Image
										src={`${__dirName}/3.jpg`}
										fill
										alt="satisfaction"
										className="absolute object-cover object-center"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
							</div> */}
							{/* <div className="flex w-full lg:pl-16 lg:pr-3">
								<div className="hidden md:flex basis-1/3"></div>
								<div className="w-full h-64 basis-1/2 flex bg-white">
									<div className="py-4 pl-5 w-full flex flex-col md:flex-row gap-3 justify-between items-center">
										<div className="basis-1/2 flex flex-col gap-2 justify-center items-start">
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
													We believe in building long-term relationships with
													our customers. Through personalized communication and
													attentive customer support, we aim to create a loyal
													customer base that trusts and relies on us for their
													import needs.
												</p>
											</div>
										</div>
										<div className="basis-1/2 size-60 relative">
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
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
