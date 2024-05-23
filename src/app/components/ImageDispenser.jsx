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
				className="relative w-44 h-44 flex flex-col justify-end items-center"
				whileHover={{ scale: 0.9 }}
				onHoverStart={() => setHovering(imageName)}
				onHoverEnd={() => setHovering(0)}
			>
				<Image
					src={`${__dirName}${imageName}${icons ? ".png" : ".jpg"}`}
					fill
					alt={imageName}
					className={`absolute object-cover object-center rounded-full ${
						icons && "cursor-pointer"
					}`}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				></Image>

				{icons && (
					<motion.div
						initial={{ opacity: 0, y: 0 }}
						animate={
							hovering && { y: 70, opacity: 1, transition: { duration: 0.5 } }
						}
						exit={{ y: 0 }}
						className="mt-36 w-56 text-center rounded-lg text-2xl bg-lemon/70 backdrop-blur-lg py-4 italic"
					>
						{title}
					</motion.div>
				)}
			</motion.div>
		</>
	);
}
