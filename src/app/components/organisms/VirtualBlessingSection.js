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
			<div className="w-full h-[400px] flex flex-col items-center bg-neutral-900 text-white justify-center text-center text-[16px] px-8">
				<span className={`${luxiaDisplay.className} text-[2.1875em] font-[1200]`}>
					Wedding Gift
				</span>

				<p className={`${futura.className} mt-4 mb-6 max-w-2xl text-[0.875em] tracking-wider`}>
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
				<div className="flex flex-col items-center justify-center max-w-5xl bg-neutral-800 text-white m-3 w-full py-5 rounded-lg">
					<span className={`${luxiaDisplay.className} text-[2.1875em] font-[1100]`}>
						Wedding Gift
					</span>

					<Bank accountName={"Anggraini Nur Indahsari"} accountNumber={"6281833461"} />
					<Bank accountName={"Ivan Darmawan"} accountNumber={"0670555135"} />

					<div className="flex flex-col items-center text-center px-8 mt-4 gap-3">
						<label className={`${futura.className} max-w-2xl text-[0.875em] tracking-wider`}>
							KIRIM HADIAH FISIK
						</label>
						<div className="border-b border-neutral-300 w-full"></div>
						<span className={`${futura.className} max-w-2xl text-[0.875em] tracking-wider`}>
							Jl. Cendrawasih VII No.107 RT.04/003, Kelurahan Sawah Baru, Kecamatan Ciputat,
							Tangerang Selatan, Banten. Kode pos 15413
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default VirtualBlessingSection;
