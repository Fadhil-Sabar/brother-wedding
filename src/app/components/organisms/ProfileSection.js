/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import ProfileInfo from "../molecules/ProfileInfo";
import { futura } from "../../utils/customFonts";
import { useRef } from "react";
import useIsVisible from "@/app/utils/useIsVisible";

const ProfileSection = () => {
	const refWord = useRef(null);
	const isVisibleRefWord = useIsVisible(refWord);

	const refProfile1 = useRef(null);
	const isVisibleRefProfile1 = useIsVisible(refProfile1);

	const refProfileWoman = useRef(null);
	const isVisibleRefProfileWoman = useIsVisible(refProfileWoman);

	const refProfileMan = useRef(null);
	const isVisibleRefProfileMan = useIsVisible(refProfileMan);

	return (
		<div className="flex flex-col items-center min-h-screen bg-white p-5 overflow-x-hidden overflow-y-hidden">
			<div className="min-h-svh">
				<div className="flex justify-center">
					<Image
						src="/images/divider2.png"
						alt="Divider"
						width={500}
						height={200}
						className="h-54 -m-15 -mb-35 object-contain"
					/>
				</div>

				<div className={`mt-20 p-5 flex items-center justify-center ${futura.className}`}>
					<span
						className={`text-gray-700 text-center max-w-2xl tracking-wider font-bold text-[0.9735em]
						transition-all duration-2000 ${
							isVisibleRefWord ? "opacity-100 delay-250" : "-translate-x-50 opacity-0"
						}`}
						ref={refWord}
					>
						"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari
						jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
						di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
						terdapat tanda-tanda bagi kaum yang berpikir." <br />
						(QS. Ar-Rum: 21)
					</span>
				</div>

				<div className="flex flex-col items-center mt-10">
					<Image
						src="/images/carousel1.jpg"
						alt="Profile image"
						width={350}
						height={120}
						priority
						className={`rounded-2xl drop-shadow-2xl bg-cover transition-all duration-2000 ${
							isVisibleRefProfile1 ? "opacity-100 delay-250" : " opacity-0"
						}`}
						ref={refProfile1}
					/>
				</div>

				<div className={`mt-20 p-5 flex items-end ${futura.className}`}>
					<span
						className={`text-gray-700 text-center max-w-2xl tracking-wider font-bold text-[0.9735em]
						transition-all duration-2000 ${isVisibleRefWord ? "opacity-100 delay-250" : "translate-x-full opacity-0"}`}
					>
						Assalamualaikum Wr. Wb. Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud
						mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
					</span>
				</div>

				<div className="flex justify-center">
					<Image
						src="/images/divider3.svg"
						alt="Divider"
						width={500}
						height={200}
						className="h-54 -m-10 object-contain"
					/>
				</div>
			</div>

			<ProfileInfo
				fullName="Anggraini Nur Indahsari, S.Ds."
				shortName="Anggi"
				parentName={
					<>
						Putri Kedua dari <br /> Bpk. Ahmad Junaidi & <br /> Ibu Rina Lisnengsih
					</>
				}
				instagramLink="https://www.instagram.com/anggrndhsr"
				imageSrc="/images/profile3.png"
				className={`transition-all duration-2000 ${
					isVisibleRefProfileWoman ? "opacity-100" : "translate-x-50 opacity-0"
				}`}
				ref={refProfileWoman}
			/>

			<ProfileInfo
				fullName="Ivan Darmawan"
				shortName="Ivan"
				parentName={
					<>
						Putra Pertama dari <br /> Bpk. Sudarmanto & <br /> Ibu Endri Waluyasari
					</>
				}
				instagramLink="https://www.instagram.com/nakagawa_iruka"
				imageSrc="/images/profile2.png"
				className={`transition-all duration-2000 ${
					isVisibleRefProfileMan ? "opacity-100" : "-translate-x-50 opacity-0"
				}`}
				ref={refProfileMan}
			/>

			<div className="flex justify-center">
				<Image
					src="/images/divider2.png"
					alt="Divider"
					width={500}
					height={200}
					className="h-54 -mb-10 object-contain rotate-180"
				/>
			</div>
		</div>
	);
};

export default ProfileSection;
