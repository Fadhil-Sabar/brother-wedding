"use client";

import { useState, useEffect } from "react";
import Button from "../atoms/Button";
import AnimatedText from "../molecules/AnimatedText";
import { greatVibes, luxiaDisplay } from "../../utils/customFonts";
import { useSearchParams } from "next/navigation";

const OpeningLayer = ({ onClose, isOpened }) => {
	const searchParams = useSearchParams();
	const name = searchParams.get("u");

	const [showElements, setShowElements] = useState({
		greeting: false,
		invite: false,
		celebration: false,
		names: false,
		button: false,
	});

	useEffect(() => {
		const timeouts = [
			setTimeout(
				() =>
					setShowElements((prev) => ({
						...prev,
						greeting: true,
						invite: true,
						celebration: true,
						names: true,
						button: true,
					})),
				300
			),
		];

		return () => timeouts.forEach((timeout) => clearTimeout(timeout));
	}, []);

	return (
		<div
			className={
				"absolute w-full flex flex-col items-center justify-between min-h-screen py-2 text-[16px] bg-[url(/images/opening.jpg)] bg-cover bg-center bg-black/50 bg-blend-multiply transform transition-all duration-2000" +
				` ${isOpened ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-full "}`
			}
		>
			<div className="w-full h-1/2 flex flex-col items-center justify-center gap-1 mt-18 py-4 transition-all">
				<AnimatedText
					text={`Dear ${name || ""},`}
					className="text-[1.125em] font-roboto tracking-wider text-white/70 delay-50"
					show={showElements.greeting}
				/>
				<AnimatedText
					text="You're invited!"
					fontClass={luxiaDisplay.className}
					className="text-[1.75em] text-white delay-150"
					show={showElements.invite}
				/>
				<AnimatedText
					text="The Wedding Celebration of"
					className="text-[1.125em] font-roboto tracking-wider text-white/70 delay-450"
					show={showElements.celebration}
				/>
				<AnimatedText
					text="Ivan & Anggi"
					fontClass={greatVibes.className}
					className="text-[2.5em] text-white tracking-wider delay-1000"
					show={showElements.names}
				/>
			</div>
			<div
				className={
					"h-1/2 bg-white mb-36 rounded-full" +
					` transform transition-all duration-2000 delay-1500 ${
						showElements.button ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`
				}
			>
				<Button onClick={onClose} icon="/icons/draft.svg">
					<p className="text-[0.875em] text-black font-roboto tracking-widr">Open Invitation</p>
				</Button>
			</div>
		</div>
	);
};

export default OpeningLayer;
