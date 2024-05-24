"use client";

import React from "react";
import Image from "next/image";
import Carousel from "nuka-carousel";

const pgBig = ["1", "2", "3", "4", "5", "6", "7"];
const pgSmall = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const efts = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const swps = ["1", "2", "3", "4", "5", "6", "7"];
const ac = ["1", "2", "3", "4", "5", "6"];
const qpt = ["1", "2", "3", "4", "5", "6", "7", "8"];
const mwst = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

export default function CarouselDispenser({ id }) {
	const __dirName = "/assets/img";
	let imageArr;

	switch (id) {
		case "pgBig":
			imageArr = [...pgBig];
			break;
		case "pgSmall":
			imageArr = [...pgSmall];
			break;
		case "efts":
			imageArr = [...efts];
			break;
		case "swps":
			imageArr = [...swps];
			break;
		case "ac":
			imageArr = [...ac];
			break;
		case "qpt":
			imageArr = [...qpt];
			break;
		case "mwst":
			imageArr = [...mwst];
			break;
		default:
			break;
	}

	return (
		<Carousel
			wrapAround={true}
			slidesToShow={1}
			autoplay={true}
			pauseOnHover={true}
			renderCenterLeftControls={false}
			renderCenterRightControls={false}
			animation={"slide"}
			cellAlign="center"
			speed={2000}
			id={id}
			className="rounded-xl text-white"
		>
			{imageArr.map((item) => (
				<div
					className="flex h-64 md:h-80 w-full justify-center items-center relative"
					key={item}
				>
					<Image
						fill
						src={`${__dirName}/${id}/${item}.jpg`}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						alt={item}
						className="object-contain object-center absolute"
					/>
				</div>
			))}
		</Carousel>
	);
}
