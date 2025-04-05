/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import ProfileInfo from "../molecules/ProfileInfo";
import { futura } from "../../utils/customFonts";

const ProfileSection = () => {
	return (
		<div className="flex flex-col items-center min-h-screen bg-white p-5">
			<div className="flex justify-center">
				<Image
					src="/images/divider2.png"
					alt="Divider"
					width={500}
					height={200}
					className="h-54 -m-15 -mb-35 object-contain"
				/>
			</div>

			<div className={`mt-20 p-5 flex items-end ${futura.className}`}>
				<span className="text-gray-700 text-right tracking-wider font-bold text-[0.9735em]">
					"In all the world, there is no heart for me like yours. In all the world, there is no love
					for you like mine." — Maya Angelou
				</span>
			</div>

			<div className="flex flex-col items-center mt-10">
				<Image
					src="/images/profile1.jpg"
					alt="Profile image"
					width={350}
					height={120}
					priority
					className="rounded-2xl drop-shadow-2xl"
				/>
			</div>

			<div className="flex justify-center">
				<Image
					src="/images/divider3.svg"
					alt="Divider"
					width={500}
					height={200}
					className="h-54 -m-15 -mb-35 object-contain"
				/>
			</div>

			<ProfileInfo
				fullName="Anggraini Nur Indahsari, S.Ds."
				shortName="Anggi"
				parentName="Putra Kedua dari Bapak Ahmad Junaedi & Ibu Rina Lisnengsih"
				instagramLink="https://www.instagram.com/anggrndhsr"
				imageSrc="/images/profile3.png"
			/>

			<ProfileInfo
				fullName="Ivan Darmawan"
				shortName="Ivan"
				parentName="Putra Pertama dari Bapak Sudarmanto & Ibu Endri Waluyasari"
				instagramLink="https://www.instagram.com/nakagawa_iruka"
				imageSrc="/images/profile2.png"
			/>
		</div>
	);
};

export default ProfileSection;
