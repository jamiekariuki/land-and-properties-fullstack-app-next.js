"use client";
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { links } from "./nav.links";

const Navbar = () => {
	const [nav, setNav] = useState();

	useEffect(() => {
		function changebg() {
			if (typeof window !== "undefined" && window.scrollY >= 410) {
				setNav(true);
			} else {
				setNav(false);
			}
		}

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", changebg);
			return () => {
				window.removeEventListener("scroll", changebg);
			};
		}
	}, []);

	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();

		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<motion.nav
			style={{
				position: nav ? "fixed" : "absolute",
				backgroundColor: nav || "transparent",
			}}
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			<div className="logo">
				{/* <Image
					alt="kello services logo"
					src="https://i.postimg.cc/vHTF5HTP/KSL-Final-Brand-Logo-Design-widescreen-blue-19-04-2022-removebg-preview.png"
					fill={true}
					className="logo-img"
					quality={100}
				/> */}
				<h6>
					Perculiarmarc <span>Ventures</span>
				</h6>
			</div>

			<div className="links">
				<ul>
					{links.map((link, index) => (
						<li key={index}>
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</motion.nav>
	);
};

export default Navbar;
