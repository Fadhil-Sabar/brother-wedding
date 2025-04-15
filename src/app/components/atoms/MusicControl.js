import { useState, useEffect } from "react";
import Image from "next/image";

const MusicControl = () => {
	const [isPlayMusic, setIsPlayMusic] = useState(true);

	const togglePlayMusic = () => {
		setIsPlayMusic((prev) => !prev);
	};

	useEffect(() => {
		const audio = document.getElementById("audio");
		if (isPlayMusic) {
			audio.play();
		} else {
			audio.pause();
		}
	}, [isPlayMusic]);

	return (
		<div className="relative">
			<div className="fixed right-0 z-10 flex flex-col items-end mr-2 backdrop-invert-10 rounded-full bg-white/50 shadow-lg">
				<audio autoPlay id="audio">
					<source
						src="/audio/TheOvertunes - I Still Love You (Acoustic Version).mp3"
						type="audio/ogg"
					/>
				</audio>
				<Image
					src={isPlayMusic ? "/icons/pause_circle_dark.svg" : "/icons/play_circle_dark.svg"}
					alt="Play icon"
					width={35}
					height={35}
					priority
					onClick={togglePlayMusic}
					className="cursor-pointer transition-transform transform hover:scale-105 active:scale-95"
				/>
			</div>
		</div>
	);
};

export default MusicControl;
