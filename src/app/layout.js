import { Inter } from "next/font/google";
import "./globals.css";
import NavbarBase from "./(navigation)/(navbar)/NavbarBase";
import Footer from "./(navigation)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "KasimImports",
	description: "Importing products across the globe.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<NavbarBase />
				{children}
				<Footer />
			</body>
		</html>
	);
}
