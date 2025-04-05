import { luxiaDisplay } from "@/app/utils/customFonts";

const GallerySection = () => {
	return (
		<div className="flex flex-col items-center text-center text-[16px] px-8 w-full min-h-[80svh] bg-neutral-50 py-8">
			<span className={`${luxiaDisplay.className} text-[2.125em] text-neutral-900`}>Gallery</span>
		</div>
	);
};

export default GallerySection;
