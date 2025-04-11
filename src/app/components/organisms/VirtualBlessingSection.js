import { futura, luxiaDisplay } from "@/app/utils/customFonts";
import Button from "../atoms/Button";
import { useState } from "react";
import { useEffect } from "react";
import Bank from "../molecules/Bank";

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
				<span className={`${luxiaDisplay.className} text-[2.1875em] font-[1200]`}>
					Virtual Blessing
				</span>

				<p className={`${futura.className} mt-4 mb-6 text-[0.875em] tracking-wider`}>
					Semoga keterbatasan ini tidak mengurangi kebahagiaan kami berdua dan tidak menghilangkan
					keberkahan dari kalian semua. Doa dari kalian untuk pernikahan kami adalah anugerah
					terindah dari Tuhan Yang Maha Esa.
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
				<div className="flex flex-col items-center justify-center bg-neutral-800 m-3 w-full py-5 rounded-lg">
					<span className={`${luxiaDisplay.className} text-[2.1875em] font-[1100]`}>
						Virtual Blessing
					</span>

					<Bank accountName={"Anggraini Nur Indahsari"} accountNumber={"6281833461"} />
					<Bank accountName={"Ivan Darmawan"} accountNumber={"067912731"} />
				</div>
			</div>
		</>
	);
};

export default VirtualBlessingSection;
