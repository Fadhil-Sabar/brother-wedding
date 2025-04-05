import { futura, luxiaDisplay } from "@/app/utils/customFonts";
import Button from "../atoms/Button";
import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

const VirtualBlessingSection = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	// Use effect to toggle body scroll lock
	useEffect(() => {
		if (isOpenModal) {
			// Lock scroll
			document.body.style.overflow = "hidden";
		} else {
			// Enable scroll
			document.body.style.overflow = "auto";
		}

		// Cleanup function
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpenModal]);

	return (
		<>
			<div className="w-full h-[400px] flex flex-col items-center justify-center text-center text-[16px] px-8">
				<span className={`${luxiaDisplay.className} text-[2.1875em] font-bold`}>
					Virtual Blessing
				</span>

				<p className={`${futura.className} mt-4 mb-6 text-[0.875em]`}>
					Hopefully this limitation does not reduce happiness for both of us and does not eliminate
					the blessings from all of you. Your prayer for our marriage is the greatest gift of all.
				</p>

				<Button
					className={`bg-white text-neutral-900 ${futura.className} tracking-wide rounded-lg text-[0.875em] font-semibold`}
					icon={"/icons/gift.svg"}
					onClick={() => setIsOpenModal(true)}
				>
					Send Gift
				</Button>
			</div>

			<div
				className={`fixed inset-0 my-auto h-full flex items-center justify-center transition-all duration-500 backdrop-blur-md z-10 ${
					isOpenModal ? "block" : "translate-y-full overflow-y-scroll"
				}`}
				onClick={() => setIsOpenModal(false)}
			>
				<div className="flex flex-col items-center justify-center bg-neutral-800 m-3 w-full h-6/12 rounded-lg">
					<span className={`${luxiaDisplay.className} text-[2.1875em] font-bold`}>
						Virtual Blessings
					</span>

					<div className="flex flex-col items-center">
						<Image
							src="/images/bank1.png"
							alt="Bank 1"
							width={200}
							height={10}
							priority
							onClick={() => {}}
						/>

						<span className={`${futura.className} font-bold text-[1em]`}>a/n Ivan Darmawan</span>
						<span className={`${futura.className} font-bold text-[1em]`}>067912731</span>

						<Button
							className={`bg-white text-neutral-900 ${futura.className} tracking-wide rounded-lg text-[0.875em] font-semibold mt-3 transition-colors active:bg-white/50`}
							icon={"/icons/copy.svg"}
							onClick={(e) => {
								navigator.clipboard.writeText("067912731");
								e.stopPropagation();
							}}
						>
							Copy Number
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default VirtualBlessingSection;
