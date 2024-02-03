"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
	open: {
		clipPath: "circle(1200px at 0px 0px)",
		transition: {
			type: "spring",
			stiffness: 20,
		},
	},
	closed: {
		clipPath: "circle(0px at 10px 10px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	const [bg, setBg] = useState(true);

	const closeNav = () => {
		setOpen(false);
	};

	useEffect(() => {
		setBg(false);
	});

	return (
		<motion.div className="sidebar" animate={open ? "open" : "closed"}>
			<motion.div
				className="bg"
				variants={variants}
				style={{
					backgroundColor: bg && "transparent",
				}}
			>
				<Links closeNav={closeNav} bg={bg} />
			</motion.div>

			<ToggleButton setOpen={setOpen} />
		</motion.div>
	);
};

export default Sidebar;
