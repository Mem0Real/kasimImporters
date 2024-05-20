"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { Poppins, Raleway } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "400",
	fallback: ["system-ui", "arial"],
});

const raleway = Raleway({
	subsets: ["cyrillic"],
	display: "swap",
});

export default function Navbar({ hidden }) {
	const [isOpen, setIsOpen] = useState(false);
	const [closed, setClosed] = useState(false);

	const menuRef = useRef();
	const pathname = usePathname() || "/";

	const [hoveredPath, setHoveredPath] = useState(pathname);

	useEffect(() => {
		const handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handler);

		return () => document.removeEventListener("mousedown", handler);
	}, []);

	useEffect(() => {
		if (hidden && isOpen) {
			setIsOpen(false);
			setClosed(true);
		} else if (!hidden) {
			closed && setIsOpen(true);
			setClosed(false);
		}
	}, [hidden]);

	const links = [
		{ path: "/", name: "Home" },
		{ path: "/products", name: "Products" },
		{ path: "/contact", name: "Contact" },
		{ path: "/about", name: "About" },
	];

	const menuVariants = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				staggerChildren: 0.1,
				staggerDirection: 1,
			},
		},
		close: {
			y: "-15px",
			opacity: 0,
			transition: {
				duration: 0.3,
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
	};
	return (
		<div ref={menuRef} className="w-full ">
			<div className="hidden md:flex justify-between items-center">
				{/* Buttons */}
				<div className="flex justify-end items-center gap-2 md:pr-10 w-full">
					{links.map((item) => {
						const isActive = item.path === pathname;

						return (
							<Link
								key={item.path}
								href={item.path}
								className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
									isActive ? "text-white" : "text-neutral-300"
								}`}
								data-active={isActive}
								onMouseOver={() => setHoveredPath(item.path)}
								onMouseLeave={() => setHoveredPath(pathname)}
							>
								{/* <motion.div
									layoutId="button-bg"
									whileHover={{
										background: "transparent",
										border: "1px solid #93CA53",
									}}
									whileTap={{ scale: 0.9 }}
									className={`p-2 rounded-md w-20 text-center ${
										path === href && "bg-lemon"
									}`}
								>
									{path === href && (
										<motion.span
											layoutId="active-background"
											className="absolute left-0 top-full block h-[2px] w-full bg-neutral-200 mt-0.5"
										/>
									)}
									<span
										initial={false}
										key={href}
										className="text-sm text-white"
									>
										{label}
									</span>
								</motion.div> */}
								<span>{item.name}</span>
								{item.path === hoveredPath && (
									<motion.div
										className="absolute bottom-0 left-0 h-full bg-lemon rounded-md -z-10"
										layoutId="navbar"
										aria-hidden="true"
										style={{
											width: "100%",
										}}
										transition={{
											type: "spring",
											bounce: 0.15,
											stiffness: 70,
											damping: 9,
											duration: 0.3,
										}}
									/>
								)}
							</Link>
						);
					})}
				</div>
			</div>

			{/* Hamburger */}
			<div className="relative flex gap-7 justify-end items-center md:hidden text-neutral-200 px-4 md:px-2 lg:px-8">
				<button
					name="menu"
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center py-2 rounded text-black-500 hover:text-black-400 z-50 absolute -top-12"
				>
					<svg
						className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
					<svg
						className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
					</svg>
				</button>
			</div>

			{/* Hamburger Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={`w-full overflow-y-hidden flex-grow lg:flex lg:items-center lg:w-auto z-40 bg-neutral-800 backdrop-blur-3xl -mt-1 pb-8 md:pb-0`}
						initial="close"
						animate={isOpen ? "open" : "close"}
						exit="close"
						variants={menuVariants}
					>
						<motion.ul className="text-sm md:hidden block py-5 list-none">
							{links.map(({ path, name }) => (
								<motion.li key={path}>
									<Link
										href={path}
										className="block mt-4 border-b lg:inline-block lg:mt-0 text-white-200 mr-4 ml-10 hover:border-b border-lemon dark:border-lemon border-spacing-y-2 py-3 font-medium text-black dark:text-white"
										onClick={() => setIsOpen(false)}
									>
										{name}
									</Link>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
