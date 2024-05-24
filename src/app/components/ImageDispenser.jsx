"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, animate, motion } from "framer-motion";

export default function ImageDispenser({
	imageName,
	icons = false,
	title = "",
}) {
	const [hovering, setHovering] = useState(0);

	let __dirName;

	icons
		? (__dirName = "/assets/img/icons/")
		: (__dirName = "/assets/img/companies/");

	return (
		<>
			<motion.div
				className="relative size-16 md:size-24 lg:size-28 max-w-full flex flex-col justify-start items-center cursor-pointer"
				whileHover={{ scale: 0.9 }}
				onHoverStart={() => setHovering(imageName)}
				onHoverEnd={() => setHovering(0)}
			>
				{icons && (
					<motion.div
						initial={{ opacity: 0, x: 0 }}
						animate={
							hovering && { x: -80, opacity: 1, transition: { duration: 0.5 } }
						}
						exit={{ x: 0 }}
						className="text-neutral-800 text-center rounded-lg text-lg font-medium bg-lemon/70 backdrop-blur-lg px-3 py-4"
					>
						{title}
					</motion.div>
				)}
				<Image
					src={`${__dirName}${imageName}.webp`}
					fill
					alt={imageName}
					className={`absolute object-cover object-center rounded-full ${
						icons && "cursor-pointer invert"
					}`}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				></Image>
			</motion.div>
		</>
	);
}
