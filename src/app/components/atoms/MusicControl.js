"use client";

import { useState } from "react";
import Image from "next/image";

const MusicControl = () => {
	const [isPlayMusic, setIsPlayMusic] = useState(false);

	const togglePlayMusic = () => {
		setIsPlayMusic((prev) => !prev);
	};

	return (
		<div className="flex flex-col items-end mr-2">
			<Image
				src={isPlayMusic ? "/icons/pause_circle.svg" : "/icons/play_circle.svg"}
				alt="Play icon"
				width={35}
				height={35}
				priority
				onClick={togglePlayMusic}
				className="cursor-pointer"
			/>
		</div>
	);
};

export default MusicControl;
