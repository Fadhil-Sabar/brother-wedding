"use client";
import { useState, Suspense } from "react";

import OpeningLayer from "./components/organisms/OpeningLayer";
import GalleryIntroSection from "./components/organisms/GalleryIntroSection";
import ProfileSection from "./components/organisms/ProfileSection";
import CountDownSection from "./components/organisms/CountDownSection";
import VirtualBlessingSection from "./components/organisms/VirtualBlessingSection";
import GallerySection from "./components/organisms/GallerySection";
import AttendanceSection from "./components/organisms/AttendanceSection";
import Image from "next/image";
import { futura } from "./utils/customFonts";

export default function Home() {
	const [isOpened, setIsOpened] = useState(true);

	const handleClose = () => {
		setIsOpened(false);
	};

	return (
		<Suspense>
			<div className="relative w-full">
				<OpeningLayer onClose={handleClose} isOpened={isOpened} />

				{!isOpened && (
					<div className="">
						<GalleryIntroSection />
						<ProfileSection />
						<CountDownSection />
						<VirtualBlessingSection />
						<GallerySection />
						<AttendanceSection />
					</div>
				)}

				<footer className={`bg-black text-white py-4 text-[16px] ${futura.className} text-wider`}>
					<p className="text-center text-[0.875em]">Made With ❤️ by Fadhil</p>
					<div className="flex items-center justify-center gap-2">
						<div className="flex items-center justify-center gap-1 cursor-pointer hover:scale-110 transition-transform" onClick={() => {
						  window.open("https://github.com/Fadhil-Sabar", "_blank");
						}}>
  						<Image src={"/icons/github-mark-white.svg"} width={15} height={15} alt="GitHub Logo" />
  						<text className="text-center text-[0.875em]">
  							GitHub
  						</text>
						</div>
						<div className="flex items-center justify-center gap-1 cursor-pointer hover:scale-110 transition-transform" onClick={() => {
						  window.open("https://www.linkedin.com/in/fadhil-andriawan-71b875212/", "_blank");
						}}>
  						<Image src={"/icons/linkedin.png"} width={15} height={15} alt="Linked In Logo" className="-mr-0.5"/>
  						<text className="text-center text-[0.875em]">
  							Linked In
  						</text>
						</div>
					</div>
				</footer>
			</div>
		</Suspense>
	);
}
