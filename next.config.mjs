/** @type {import('next').NextConfig} */
/* const nextConfig = {};

export default nextConfig; */

/** @type {import('next').NextConfig} */
//https://postimg.cc/files
const nextConfig = {
	/* images: {
		domains: ["i.postimg.cc"],
	}, */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.postimg.cc",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "utfs.io",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;

//module.exports = nextConfig;
