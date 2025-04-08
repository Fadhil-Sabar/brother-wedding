"use client";
import { useState, Suspense } from "react";

import OpeningLayer from "./components/organisms/OpeningLayer";
import GalleryIntroSection from "./components/organisms/GalleryIntroSection";
import ProfileSection from "./components/organisms/ProfileSection";
import CountDownSection from "./components/organisms/CountDownSection";
import VirtualBlessingSection from "./components/organisms/VirtualBlessingSection";
import GallerySection from "./components/organisms/GallerySection";
import AttendanceSection from "./components/organisms/AttendanceSection";

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
			</div>
		</Suspense>
	);
}
