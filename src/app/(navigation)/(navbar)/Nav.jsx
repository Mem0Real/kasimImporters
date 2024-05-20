"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/products",
		name: "Products",
	},
	{
		path: "/contact",
		name: "Contact",
	},
	{
		path: "/about",
		name: "About",
	},
];

export default function Nav() {
	let pathname = usePathname() || "/";

	const [hoveredPath, setHoveredPath] = useState(pathname);

	return (
		<div className="border border-stone-800/90 p-[0.4rem] top-4 z-[100] ">
			<nav className="flex gap-2 relative justify-end w-full z-[100]  rounded-lg">
				{navItems.map((item, index) => {
					const isActive = item.path === pathname;

					return (
						<Link
							key={item.path}
							className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
								isActive ? "text-white" : "text-neutral-300"
							}`}
							data-active={isActive}
							href={item.path}
							onMouseOver={() => setHoveredPath(item.path)}
							onMouseLeave={() => setHoveredPath(pathname)}
						>
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
			</nav>
		</div>
	);
}
