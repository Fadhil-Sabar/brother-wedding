import { futura, luxiaDisplay, photographSignature } from "../../utils/customFonts";

const { default: Image } = require("next/image");

const ProfileInfo = ({
	shortName = "",
	fullName = "",
	parentName = "",
	instagramLink = "",
	imageSrc = "",
	className = "",
	...props
}) => {
	return (
		<div className={`flex flex-col items-center mt-20 ${className}`}>
			<Image
				src={imageSrc}
				alt="Profile image"
				width={150}
				height={150}
				priority
				className="rounded-full"
				{...props}
			/>

			<span
				className={`${photographSignature.className} text-[2.75em] font-light tracking-wider mt-5 text-neutral-900`}
			>
				{shortName}
			</span>
			<span
				className={`${luxiaDisplay.className} text-[1.25em] md:text-[1.5em] tracking-wider text-neutral-900`}
			>
				{fullName}
			</span>

			<div className="w-50 bg-black/50 h-0.5 my-4"></div>

			<span
				className={`${futura.className} text-[0.875em] tracking-wider w-45 text-center font-semibold text-neutral-500 mt-2`}
			>
				{parentName}
			</span>

			<Image
				src={"/icons/instagram.png"}
				alt="Instagram icon"
				width={40}
				height={40}
				priority
				className="rounded-full mt-5 cursor-pointer hover:scale-110 transition-transform"
				onClick={() => window.open(instagramLink, "_blank")}
			/>
		</div>
	);
};

export default ProfileInfo;
