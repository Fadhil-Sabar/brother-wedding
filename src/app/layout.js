import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Ivan & Anggi Wedding",
	description: "The Wedding of Ivan & Anggi",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title: "Ivan & Anggi Wedding",
		description: "The Wedding of Ivan & Anggi",
		url: "https://brother-wedding.vercel.app",
		siteName: "Ivan & Anggi Wedding",
		images: [
			{
				url: "/images/carousel2.jpg",
				width: 1200,
				height: 630,
			},
		],
		locale: "en_US",
		type: "website",
	},
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
	},
	manifest: "/manifest.json",
	viewport: "width=device-width, initial-scale=1.0",
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
