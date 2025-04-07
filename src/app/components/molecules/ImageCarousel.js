"use client";

import { useState, useEffect } from "react";

const ImageCarousel = ({ images, interval = 4000, children }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [fadeState, setFadeState] = useState("fade-in");

	useEffect(() => {
		const rotationInterval = setInterval(() => {
			setFadeState("fade-out");

			setTimeout(() => {
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
				setFadeState("fade-in");
			}, 500);
		}, interval);

		return () => clearInterval(rotationInterval);
	}, [images.length, interval]);

	return (
		<div
			className="flex flex-col justify-between min-h-screen py-2 text-[16px] bg-cover bg-center transition-all ease-in-out duration-3000 bg-black/50 bg-blend-multiply"
			style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
		>
			{children}
		</div>
	);
};

export default ImageCarousel;
