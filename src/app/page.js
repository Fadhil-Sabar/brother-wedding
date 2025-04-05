"use client";
import { useState } from "react";

import OpeningLayer from "./components/organisms/OpeningLayer";
import GalleryIntroSection from "./components/organisms/GalleryIntroSection";
import ProfileSection from "./components/organisms/ProfileSection";
import CountDownSection from "./components/organisms/CountDownSection";
import VirtualBlessingSection from "./components/organisms/VirtualBlessingSection";
import GallerySection from "./components/organisms/GallerySection";

export default function Home() {
	const [isOpened, setIsOpened] = useState(true);

	const handleClose = () => {
		setIsOpened(false);
	};

	return (
		<div className="relative w-full">
			<OpeningLayer onClose={handleClose} isOpened={isOpened} />

			{!isOpened && (
				<div className="">
					<GalleryIntroSection />
					<ProfileSection />
					<CountDownSection />
					<VirtualBlessingSection />
					<GallerySection />
				</div>
			)}
		</div>
	);
}
