"use client";

import Image from "next/image";
import ImageCarousel from "../molecules/ImageCarousel";
import MusicControl from "../atoms/MusicControl";
import { bradHefferson, futura, luxiaDisplay } from "../../utils/customFonts";
import useIsVisible from "@/app/utils/useIsVisible";
import { useRef } from "react";

const GalleryIntroSection = () => {
	const carouselImages = [
		// "/images/carousel1.jpg",
		"/images/carousel2.jpg",
		// Add more images as needed
	];

	const refGallery = useRef(null);
	const isVisibleRefGallery = useIsVisible(refGallery);

	return (
		<ImageCarousel images={carouselImages}>
			<MusicControl />

			<div className="text-white text-center my-60 h-60 px-4 flex flex-col" ref={refGallery}>
				<span
					className={`${bradHefferson.className} text-[3em] transition-all duration-1000 ${
						isVisibleRefGallery ? "opacity-100 delay-500" : "-translate-y-full opacity-0"
					}`}
				>
					The Wedding of
				</span>
				<span
					className={`${luxiaDisplay.className} text-[2.5em] transition-all duration-1000 ${
						isVisibleRefGallery ? "opacity-100 delay-750" : "-translate-y-full opacity-0"
					}`}
				>
					Ivan & Anggi
				</span>
				<span
					className={`${
						futura.className
					} text-[1.25em] tracking-widest transition-all duration-1000 ${
						isVisibleRefGallery ? "opacity-100 delay-1000" : "-translate-y-full opacity-0"
					}`}
				>
					APRIL 27, 2025
				</span>

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
