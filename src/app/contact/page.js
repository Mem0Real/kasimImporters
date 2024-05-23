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
			className="min-h-screen w-full flex flex-col justify-center items-center bg-no-repeat bg-center"
			style={{
				background: 'url("/assets/img/background.jpg") center/cover',
			}}
		>
			<div className="w-72 h-full flex flex-col justify-evenly items-center gap-y-2 border border-neutral-300 rounded-lg bg-black/60 backdrop-blur-sm">
				{/* Map */}
				{/* <iframe
					width={300}
					height={145}
					className="border-none"
					loading="lazy"
					allowFullScreen="false"
					referrerPolicy="no-referrer-when-downgrad"
					
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.165660356314!2d38.749478004785566!3d9.033510368516783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f5efcffebd3%3A0xda821c73ef928f93!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1716502371132!5m2!1sen!2set"
				/> */}
				<iframe
					src="https://maps.google.com/maps?q=9.034214986044157, 38.74963357290192&z=15&output=embed"
					width={280}
					height={100}
					className="border-none p-1"
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
