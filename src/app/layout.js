// import '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import NavbarBase from "./(navigation)/(navbar)/NavbarBase";
import Footer from "./(navigation)/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400"] });

export const metadata = {
	title: "Kasim General Imports",
	description: "Importing products across the globe.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-neutral-800 overflow-x-hidden">
				<NavbarBase />
				<div className={roboto.className}>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
