"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CarouselDispenser from "./CarouselDispenser";

const items = [
	{
		id: "pgBig",
		title: "Bigger Sized Power Generators from 12-kva upto 1000-kva",
	},
	{
		id: "pgSmall",
		title: "Small Sized Power Generators from 1-kva upto 12-kva",
	},
	{
		id: "efts",
		title: "Electrical and Fuel Surface Water Pump from 0.5HP upto 50HP",
	},
	{
		id: "swps",
		title: "Submersible Water Pump System",
	},
	{ id: "ac", title: "Air Compressor from 25-litre to 1000-litre capacity" },
	{
		id: "qpt",
		title: "Quality Power Tools",
	},
	{ id: "mwst", title: "Mechanical Workshop Tools" },
];

export default function CardDispenser() {
	useEffect(() => {
		const gridItems = document.querySelectorAll(".grid > div");
		gridItems[gridItems.length - 1].classList.add("lg:row-start-last");
	}, []);

	return (
		<div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-16 lg:gap-y-36 place-items-center self-center">
			{items.map(({ id, title }) => (
				<motion.div
					className="w-[85vw] md:w-[75vw] lg:w-[25rem] xl:w-[25vw] h-full flex flex-col justify-center items-center mx-auto bg-blue-400/50 rounded-xl shadow-lg shadow-black p-3 cursor-pointer"
					whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
					id={id}
				>
					<div className="h-full w-full bg-white-300/65 rounded-lg">
						<CarouselDispenser id={id} />
					</div>
					{/* Titles */}
					<h1 className="w-full p-5 text-base md:text-lg text-semibold text-neutral-200 bg-black/5 rounded-xl mt-4 backdrop-blur-md text-center ps-4">
						{title}
					</h1>
				</motion.div>
			))}
		</div>
	);
}
