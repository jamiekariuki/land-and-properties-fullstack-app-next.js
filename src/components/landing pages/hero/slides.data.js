"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
	initial: {
		opacity: 0,
		y: -6,
	},
	animate: {
		opacity: 1,
		y: 0,

		transition: {
			duration: 0.5,
			staggerChildren: 0.4,
		},
	},
};

export const sliderData = [
	{
		pic: "https://i.postimg.cc/RhpkJP24/pexels-pok-rie-574441.jpg",
		info: (
			<motion.div
				className="hero-content"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<motion.h1 variants={variants}>
					Discover Your Dream Plot
				</motion.h1>
				<motion.p variants={variants}>
					Unlock Possibilities! Discover prime plots for sale in
					Kenya. Your canvas for dreams and investments starts here.
				</motion.p>
				<Link href={"/properties"}>
					<motion.button variants={variants}>
						<h5>View More</h5>
					</motion.button>
				</Link>
			</motion.div>
		),
	},
	{
		pic: "https://i.postimg.cc/bvk6NJpy/pexels-tom-fisk-5972213.jpg",
		info: (
			<motion.div
				className="hero-content"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<motion.h1 variants={variants}>
					Plan your tomorrow beyond usual limits.
				</motion.h1>
				<motion.p variants={variants}>
					We invite you to explore a future filled with endless
					possibilities, where each plot holds the promise of a unique
					journey waiting to unfold.
				</motion.p>

				<Link href={"/properties"}>
					<motion.button>
						<h5>View More</h5>
					</motion.button>
				</Link>
			</motion.div>
		),
	},
	{
		pic: "https://i.postimg.cc/K4XPW6s9/village-view-from.jpg",
		info: (
			<motion.div
				className="hero-content"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<motion.h1 variants={variants}>
					Discover Your Haven: Exclusive Land.
				</motion.h1>
				<motion.p variants={variants}>
					Discover the exclusivity of our land offerings, providing
					you with a haven that goes beyond mere property, offering an
					experience that resonates with your aspirations.
				</motion.p>

				<Link href={"/properties"}>
					<motion.button variants={variants}>
						<h5>View More</h5>
					</motion.button>
				</Link>
			</motion.div>
		),
	},
	{
		pic: "https://i.postimg.cc/ZRHR2SvH/aerial-photography-town-during-daytime.jpg",
		info: (
			<motion.div
				className="hero-content"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<motion.h1 variants={variants}>
					Your story begins with plots made for you.
				</motion.h1>
				<motion.p variants={variants}>
					Embark on a journey of exploration with us as we present
					plots that go beyond mere spaces they are canvases ready to
					transform your dreams into reality.
				</motion.p>

				<Link href={"/properties"}>
					<motion.button variants={variants}>
						<h5>View More</h5>
					</motion.button>
				</Link>
			</motion.div>
		),
	},
	{
		pic: "https://i.postimg.cc/8cWmpXh7/pexels-mehmet-turgut-kirkgoz-4832350.jpg",
		info: (
			<motion.div
				className="hero-content"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<motion.h1 variants={variants}>
					Find the perfect plot.
				</motion.h1>
				<motion.p variants={variants}>
					Imagine your plot, nestled in landscapes of tranquility and
					opportunity, patiently waiting for you to discover its
					hidden beauty and potential.
				</motion.p>

				<Link href={"/properties"}>
					<motion.button variants={variants}>
						<h5>View More</h5>
					</motion.button>
				</Link>
			</motion.div>
		),
	},
	{
		pic: "https://i.postimg.cc/3JSs6nKg/pexels-arthouse-studio-4326847.jpg",
		info: (
			<motion.div
				className="hero-content"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<motion.h1 variants={variants}>
					Plots beyond usual places.
				</motion.h1>
				<motion.p variants={variants}>
					Dive into the realm of nature-inspired investments with our
					exclusive land offerings, where you get to choose not just a
					property but a piece of the natural world.
				</motion.p>

				<Link href={"/properties"}>
					<motion.button variants={variants}>
						<h5>View More</h5>
					</motion.button>
				</Link>
			</motion.div>
		),
	},
	{
		pic: "https://i.postimg.cc/d0xmcZhN/pexels-pok-rie-6225499.jpg",
		info: (
			<motion.div
				className="hero-content"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<motion.h1 variants={variants}>
					Nature's colors unfold on your plot
				</motion.h1>
				<motion.p variants={variants}>
					Set your sights on a tomorrow that transcends the ordinary;
					your plot becomes the starting point for a future that
					breaks free from conventional boundaries.
				</motion.p>

				<motion.button variants={variants}>
					<h5>View More</h5>
				</motion.button>
			</motion.div>
		),
	},
	{
		pic: "https://i.postimg.cc/G38zdRng/aerial-view-village.jpg",
		info: (
			<motion.div
				className="hero-content"
				variants={variants}
				initial="initial"
				whileInView="animate"
			>
				<motion.h1 variants={variants}>
					Exclusive land is here.
				</motion.h1>
				<motion.p variants={variants}>
					Your story begins on plots crafted uniquely for you a
					narrative that unfolds amidst nature's grandeur and the
					promise of a tailored living experience.
				</motion.p>

				<motion.button variants={variants}>
					<h5>View More</h5>
				</motion.button>
			</motion.div>
		),
	},
];
