"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, animate, motion } from "framer-motion";

export default function ImageDispenser({
	imageName,
	icons = false,
	title = "",
}) {
	const [hovering, setHovering] = useState(0);
	const [tapArray, setTapArray] = useState([]);
	const [text, showText] = useState("");

	let __dirName, visibleText;

	icons
		? (__dirName = "/assets/img/icons/")
		: (__dirName = "/assets/img/companies/");

	const processTap = (item) => {
		if (tapArray.includes(item)) {
			removeFromTap(item);
		} else {
			addToTap(item);
		}
	};
	const addToTap = (item) => {
		setTapArray((oldArray) => [item, ...oldArray]);
	};

	const removeFromTap = (item) => {
		let index = tapArray.indexOf(item);

		setTapArray([...tapArray.slice(0, index), ...tapArray.slice(index + 1)]);
	};

	const visible = (image) => {
		if (text === image) {
			showText("");
		} else {
			showText(image);
			console.log(text);
		}
	};

	useEffect(() => {
		visibleText = text;
	}, []);

	return (
		<>
			<motion.div
				className={`relative ${
					icons
						? "size-16 md:size-24 lg:size-28"
						: "size-24 md:size-48 lg:size-56"
				} max-w-full flex flex-col justify-start items-center cursor-pointer`}
				whileHover={{ scale: 0.9 }}
				// onHoverStart={() => addToTap(imageName)}
				// onHoverEnd={() => removeFromTap(imageName)}
				// onTap={() => visible(imageName)}
				onHoverStart={() => addToTap(imageName)}
				onHoverEnd={() => removeFromTap(imageName)}
				onTap={() => processTap(imageName)}
			>
				{icons && (
					<motion.div
						initial={{ opacity: 0, x: 0, y: 0 }}
						animate={
							hovering
								? { y: -80, opacity: 1, transition: { duration: 0.5 } }
								: tapArray?.includes(imageName)
								? { y: -80, opacity: 1, transition: { duration: 0.5 } }
								: { y: 20, opacity: 0, transition: { duration: 0.5 } }
						}
						exit={{ x: 0, y: 0 }}
						className="text-neutral-800 text-center rounded-lg text-lg font-medium bg-lemon/70 backdrop-blur-lg px-3 py-4 min-w-36"
					>
						{title}
					</motion.div>
				)}
				<Image
					src={`${__dirName}${imageName}.webp`}
					fill
					alt={imageName}
					className={`absolute ${
						imageName === "6" ? "object-contain" : "object-cover"
					} object-center rounded-full ${icons && "cursor-pointer invert"}`}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				></Image>
			</motion.div>
		</>
	);
}
