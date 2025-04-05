/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import ProfileInfo from "../molecules/ProfileInfo";
import { futura } from "../../utils/customFonts";

const ProfileSection = () => {
	return (
		<div className="flex flex-col items-center min-h-screen bg-white p-5">
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

			<ProfileInfo
				fullName="Ivan Darmawan"
				shortName="Ivan"
				parentName="Bapak Sudarmanto & Ibu Endri Waluyasari"
				instagramLink="https://www.instagram.com/nakagawa_iruka"
				imageSrc="/images/profile2.png"
			/>

			<ProfileInfo
				fullName="Anggraini Nur"
				shortName="Anggi"
				parentName="Bapak _ & Ibu _"
				instagramLink="https://www.instagram.com/anggrndhsr"
				imageSrc="/images/profile3.png"
			/>
		</div>
	);
};

export default ProfileSection;
