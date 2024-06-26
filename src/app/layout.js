import "./globals.scss";
import { Cormorant, Bodoni_Moda } from "next/font/google";
import { ThemeProvider2 } from "@/context/themeContext";
import { cookies } from "next/headers";
import Navbar from "@/components/landing navbar/navbar";
import Sidebar from "@/components/landing navbar/sidebar/Sidebar";
import Footer from "@/components/landing footer/footer";
import Toast from "@/components/styled components/toast/toast";
import { ToastProvider } from "@/context/toastContext";
import { currentServerUser } from "@/utils/get current user/get.current.server.user";
import NextTopLoader from "nextjs-toploader";
import ogImage from "./opengraph-image.png";

//fonts
const cormorant = Cormorant({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-cormorant",
	display: "swap",
});

const bodoni = Bodoni_Moda({
	weight: ["400", "500", "600"],
	subsets: ["latin"],
	variable: "--font-bodoni",
	display: "swap",
});

//meta data
export const metadata = {
	title: {
		default: "Peculiarmarc Ventures",
		template: "%s | Peculiarmarc Ventures",
	},
	description:
		"Peculiarmarc ventures limited delivers real estate soluons at personalized level and is a market leader in providing lands and plots for sale at reasonable and affordable price.",
	twitter: {
		card: "summary_large_image",
	},

	metadataBase: new URL("https://peculiarmarc.vercel.app"),
	openGraph: {
		images: [
			{
				url: ogImage.src,
				width: ogImage.width,
				height: ogImage.height,
			},
		],
	},
	twitter: {
		images: [
			{
				url: ogImage.src,
				width: ogImage.width,
				height: ogImage.height,
			},
		],
	},
};

export default async function RootLayout({ children }) {
	const cookieStore = cookies();
	const mode = cookieStore.get("darkMode");

	let darkMode = false;

	if (mode) {
		if (mode.value === "true") {
			darkMode = true;
		}
	}

	const user = await currentServerUser();

	return (
		<html lang="en" className={`${cormorant.variable} ${bodoni.variable} `}>
			<body>
				<NextTopLoader color="#e82e59" />
				<ToastProvider>
					<ThemeProvider2 serverDarkMode={darkMode}>
						<Navbar user={user} />
						<Sidebar />
						<div className="pages">{children}</div>
						<Footer />
					</ThemeProvider2>
					<div id="toast-portal">
						<Toast />
					</div>
				</ToastProvider>
			</body>
		</html>
	);
}
