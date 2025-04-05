"use client";

import Image from "next/image";
import ImageCarousel from "../molecules/ImageCarousel";
import MusicControl from "../atoms/MusicControl";
import { bradHefferson, futura, luxiaDisplay } from "../../utils/customFonts";

const GalleryIntroSection = () => {
	const carouselImages = [
		"/images/carousel1.jpg",
		"/images/carousel2.jpg",
		// Add more images as needed
	];

	return (
		<ImageCarousel images={carouselImages}>
			<MusicControl />

			<div className="text-white text-center mb-40 h-60 px-4 flex flex-col">
				<span className={`${bradHefferson.className} text-[3em]`}>The Wedding of</span>
				<span className={`${luxiaDisplay.className} text-[2.5em]`}>Ivan & Anggi</span>
				<span className={`${futura.className} text-[1.25em] tracking-widest`}>APRIL 31, 2025</span>

				<div className="flex flex-col items-center mt-4">
					<Image
						src="/icons/expand_circle_down.svg"
						alt="Expand circle down icon"
						width={35}
						height={35}
						priority
						className="animate-bounce h-12 translate-y-1"
					/>
				</div>
			</div>
		</ImageCarousel>
	);
};

export default GalleryIntroSection;
