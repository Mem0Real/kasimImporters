import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faEnvelope,
	faMapMarker,
	faMapMarkerAlt,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

export default function Contact() {
	return (
		<div
			id="showcase"
			className="min-h-screen w-full flex flex-col justify-center items-center bg-no-repeat bg-center pt-[4em]"
			style={{
				background: 'url("/assets/img/background.webp") center/cover',
			}}
		>
			<div className="my-16 w-[95vw] md:w-[70vw] h-full min-h-[80vh] py-5 flex flex-col justify-evenly items-center gap-y-2 border border-neutral-300 rounded-lg bg-black/60 backdrop-blur-sm">
				{/* Map */}
				<iframe
					src="https://maps.google.com/maps?q=9.034214986044157, 38.74963357290192&z=15&output=embed"
					width={900}
					height={300}
					className="border-none p-1 w-64 md:w-96 xl:w-[60vw]"
					loading="lazy"
					allowFullScreen="false"
				/>
				<div className="flex flex-col justify-center items-center gap-3">
					<div className="px-2 py-.5 rounded-xl flex flex-col justify-center items-center text-blue-500">
						<FontAwesomeIcon icon={faEnvelope} size="2x" />
					</div>
					<p className="text-white text-center">
						kasimkemalgeneralimport@gmail.com
					</p>

					<div className="flex flex-col justify-center items-center gap-3">
						<div className="px-2 py-.5 rounded-xl flex flex-col justify-center items-center text-red-700">
							<FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
						</div>
						<p className="text-white text-center">Addis Ababa, Piassa</p>
					</div>

					<div className="flex flex-col justify-center items-center gap-3">
						<div className="px-2 py-.5 rounded-xl flex flex-col justify-center items-center text-neutral-300">
							<FontAwesomeIcon icon={faPhone} size="2x" />
						</div>
						<p className="text-white text-center">0911433255</p>
					</div>
				</div>
			</div>
		</div>
	);
}
