import { luxiaDisplay } from "@/app/utils/customFonts";
import Image from "next/image";
import { useState, useRef, useMemo } from "react";
import useIsVisible from "@/app/utils/useIsVisible";
import Button from "../atoms/Button";

const GallerySection = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const refImage = useRef(null);
	const isVisibleRefImage = useIsVisible(refImage);
	const [isExpanded, setIsExpanded] = useState(false);

	const galleryData = [
		{ id: 1, src: "/images/gallery1.jpg", alt: "Wedding photo 1", aspectRatio: "portrait" },
		{ id: 2, src: "/images/gallery2.jpg", alt: "Wedding photo 2", aspectRatio: "portrait" },
		{ id: 3, src: "/images/gallery3.jpg", alt: "Wedding photo 3", aspectRatio: "portrait" },
		{ id: 4, src: "/images/gallery4.jpg", alt: "Wedding photo 4", aspectRatio: "portrait" },
		{ id: 5, src: "/images/gallery5.jpg", alt: "Wedding photo 5", aspectRatio: "portrait" },
		// { id: 6, src: "/images/gallery6.jpg", alt: "Wedding photo 6", aspectRatio: "landscape" },
		// { id: 7, src: "/images/gallery7.jpg", alt: "Wedding photo 7", aspectRatio: "landscape" },
		// { id: 8, src: "/images/gallery8.jpg", alt: "Wedding photo 8", aspectRatio: "landscape" },
		// { id: 9, src: "/images/gallery9.jpg", alt: "Wedding photo 9", aspectRatio: "landscape" },
		// { id: 10, src: "/images/gallery10.jpg", alt: "Wedding photo 10", aspectRatio: "potrait" },
		// { id: 11, src: "/images/gallery11.jpg", alt: "Wedding photo 11", aspectRatio: "potrait" },
		// { id: 12, src: "/images/gallery12.jpg", alt: "Wedding photo 12", aspectRatio: "potrait" },
		// { id: 13, src: "/images/gallery13.jpg", alt: "Wedding photo 13", aspectRatio: "potrait" },
		// { id: 14, src: "/images/gallery14.jpg", alt: "Wedding photo 14", aspectRatio: "potrait" },
		// Add all your gallery images here
	];

	const isMany = useMemo(() => {
		return galleryData.length > 10;
	}, [galleryData.length]);

	return (
		<div className="flex flex-col items-center text-center text-[16px] w-full min-h-[80svh] bg-neutral-50 py-12 px-4 md:px-8">
			<h2 className={`${luxiaDisplay.className} text-[2.125em] text-neutral-900 mb-8`}>Gallery</h2>

			<div
				className={`relative ${
					!isExpanded ? "overflow-y-hidden max-h-[80vh]" : "h-auto pb-10"
				} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-full max-w-6xl auto-rows-[minmax(150px,auto)]
					`}
				ref={refImage}
			>
				{galleryData.map((image) => (
					<div
						key={image.id}
						className={`overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-500
                        ${image.aspectRatio === "portrait" ? "row-span-2" : ""}
                        ${
													isVisibleRefImage
														? `opacity-100 transform-none delay-${250 * image.id}`
														: "opacity-0 translate-y-8"
												}
						`}
						onClick={() => setSelectedImage(image.id)}
					>
						<Image
							src={image.src}
							alt={image.alt}
							width={800}
							height={800}
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
							className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
							loading="lazy"
						/>
					</div>
				))}

				<div
					className={`absolute right-0 left-0 flex items-center justify-center
						${isExpanded ? "-bottom-5" : "bottom-0 bg-gradient-to-t from-neutral-50 to-transparent h-20"}
					`}
				>
					<Button
						className={`bg-neutral-900 text-white px-6 py-2 rounded-full text-[0.875em] font-semibold tracking-wide shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md`}
						onClick={() => setIsExpanded(!isExpanded)}
					>
						{isExpanded ? "Show Less" : "Show More"}
					</Button>
				</div>
			</div>

			{/* Image modal */}
			<div
				className={`fixed inset-0 bg-black/80 z-50 items-center justify-center p-4 ${
					selectedImage ? "flex" : "translate-y-full"
				} transition-all duration-500`}
				onClick={() => setSelectedImage(null)}
			>
				<div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
					<button
						className="absolute top-4 right-2 bg-black/15 text-white w-10 h-10 rounded-full flex items-center justify-center"
						onClick={() => setSelectedImage(null)}
					>
						&times;
					</button>
					{selectedImage && (
						<Image
							src={galleryData.find((img) => img.id === selectedImage)?.src}
							alt={galleryData.find((img) => img.id === selectedImage)?.alt}
							width={800}
							height={800}
							className="max-h-[85vh] w-auto object-contain rounded-lg"
						/>
					)}

					<button
						className="absolute top-1/2 left-2 bg-black/15 text-white w-10 h-10 rounded-full flex items-center justify-center"
						onClick={() => setSelectedImage((prev) => (prev > 1 ? prev - 1 : galleryData.length))}
					>
						&lt;
					</button>
					<button
						className="absolute top-1/2 right-2 bg-black/15 text-white w-10 h-10 rounded-full flex items-center justify-center"
						onClick={() => setSelectedImage((prev) => (prev < galleryData.length ? prev + 1 : 1))}
					>
						&gt;
					</button>
				</div>
			</div>
		</div>
	);
};

export default GallerySection;
