import React from "react";
import { Audiowide } from "next/font/google";
import Image from "next/image";

const audioWide = Audiowide({
	subsets: ["latin"],
	weight: ["400"],
});

export default function Footer() {
	const __dirName = "/assets/img";
	return (
		<div className="w-full h-28 md:h-28 lg:h-12 bg-neutral-800 text-neutral-200 text-sm font-light grid grid-rows-2 lg:grid-rows-1 md:grid-col-3 grid-flow-col">
			<div className="col-span-2 mx-auto lg:place-self-end lg:mr-0  flex flex-col justify-center items-center self-center">
				<span>COPYRIGHT © 2023, KASIM KEMAL</span>
				<span>All Rights Reserved</span>
			</div>
			<div className="md:mx-auto lg:mx-0 h-16 lg:h-12 col-span-2 w-full lg:w-fit lg:col-span-1 max-w-[40em] place-self-end">
				<div
					className={`flex justify-center items-center ${audioWide.className}`}
				>
					<span className="text-center"> Web Developed by: </span>
					<div className="h-16 lg:h-24 xl:h-16 w-36 xl:w-44 relative">
						<Image
							fill
							src={`${__dirName}/Mem0Real.webp`}
							alt="Mem0Real"
							className="object-cover object-center"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
