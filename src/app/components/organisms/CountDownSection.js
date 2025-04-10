import { useState, useEffect, useRef } from "react";
import { bradHefferson, futura, luxiaDisplay } from "@/app/utils/customFonts";
import ImageCarousel from "../molecules/ImageCarousel";
import Button from "../atoms/Button";
import Image from "next/image";
import useIsVisible from "@/app/utils/useIsVisible";

const weddingDate = new Date("11:00 April 27, 2025");
const dayString = weddingDate.toLocaleString("en-US", { weekday: "long" });
const dateString = weddingDate.getDate();
const monthString = weddingDate.toLocaleString("en-US", { month: "long" });
const yearString = weddingDate.getFullYear();

const CountDownSection = () => {
	const carouselImages = [
		// "/images/countdowncarousel1.jpg",
		// "/images/carousel2.jpg",
		"/images/countdowncarousel2.png",
		// Add more images as needed
	];

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const refLeading = useRef(null);
	const isVisibleRefLeading = useIsVisible(refLeading);

	const refAkad = useRef(null);
	const isVisibleRefAkad = useIsVisible(refAkad);

	const refResepsi = useRef(null);
	const isVisibleRefResepsi = useIsVisible(refResepsi);

	useEffect(() => {
		const updateCountdown = () => {
			const now = new Date();
			const timeLeft = weddingDate - now;

			if (timeLeft <= 0) {
				// Wedding day has arrived
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
			} else {
				setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
				setHours(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
				setMinutes(Math.floor((timeLeft / (1000 * 60)) % 60));
				setSeconds(Math.floor((timeLeft / 1000) % 60));
			}
		};

		// Update immediately
		updateCountdown();

		// Then update every second
		const timerId = setInterval(updateCountdown, 1000);

		// Clean up the interval when component unmounts
		return () => clearInterval(timerId);
	}, []);

	return (
		<ImageCarousel images={carouselImages}>
			<div className="flex flex-col justify-center items-center text-[16px] gap-6 pb-10 ">
				<span
					className={`${
						bradHefferson.className
					} text-[2.75em] md:text-[2.8125em] mt-10 transition-all duration-1000 ${
						isVisibleRefLeading ? `opacity-100` : "-translate-y-full opacity-0"
					}`}
					ref={refLeading}
				>
					Counting down to the big day
				</span>

				<span
					className={`${
						futura.className
					} text-[1.125em] tracking-widest font-semibold transition-all duration-1000 delay-250 ${
						isVisibleRefLeading ? "opacity-100" : "-translate-y-full opacity-0"
					}`}
				>
					{dayString}, {dateString} {monthString} {yearString}
				</span>

				<div
					className={`grid grid-cols-4 gap-4 w-11/12 text-center transition-all duration-1000 delay-500 ${
						isVisibleRefLeading ? "opacity-100" : "-translate-y-full opacity-0"
					}`}
				>
					<div className="flex flex-col items-center">
						<span className="text-[1.25em] font-semibold">{days}</span>
						<span>Days</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-[1.25em] font-semibold">{hours}</span>
						<span>Hours</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-[1.25em] font-semibold">{minutes}</span>
						<span>Minutes</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-[1.25em] font-semibold">{seconds}</span>
						<span>Seconds</span>
					</div>
				</div>

				<Button
					className={`bg-white text-neutral-900 ${
						futura.className
					} tracking-wide rounded-lg text-[0.875em] font-semibold transition-all duration-1000 delay-750 ${
						isVisibleRefLeading ? "opacity-100" : "opacity-0"
					}`}
					icon={"/icons/calendar.svg"}
				>
					Add to Calendar
				</Button>

				<div className="flex flex-col items-center justify-center backdrop-blur-xs gap-2 px-5 text-center bg-black/40 rounded-4xl w-11/12 py-10 overflow-hidden">
					<div
						className={`flex flex-col transition-all duration-1000 ${
							isVisibleRefAkad ? "opacity-100" : "-translate-x-full opacity-0"
						}`}
						ref={refAkad}
					>
						<span className={`${bradHefferson.className} text-[2.8125em] tracking-wider `}>
							Akad Nikah
						</span>

						<span className={`${futura.className} text-[0.9375em] tracking-widest font-[1000]`}>
							{dayString}, {dateString} {monthString} {yearString}
						</span>

						<span className={`${futura.className} text-[0.9375em] tracking-widest font-[1000]`}>
							09.00 s/d 10.00 WIB
						</span>
					</div>

					<div
						className={`flex flex-col items-center transition-all duration-1000 delay-250 ${
							isVisibleRefAkad ? "opacity-100" : "translate-x-full opacity-0"
						}`}
					>
						<span className={`${futura.className} text-[0.9375em] tracking-widest font-semibold`}>
							At GOR Balai Rakyat Condet
						</span>

						<span className={`${futura.className} text-[0.875em] tracking-wider`}>
							Gg. Balai Rakyat No.5, RT.5/RW.5, <br />
							Balekambang, Kec. Kramat jati, <br />
							Kota Jakarta Timur, <br />
							Daerah Khusus Ibukota Jakarta, <br />
							13530, Indonesia
						</span>

						<Button
							className={`bg-white text-neutral-900 mt-2 max-w-max ${futura.className} tracking-wide rounded-lg text-[0.875em] font-semibold`}
							icon={"/icons/location.svg"}
							onClick={() => window.open("https://maps.app.goo.gl/sopPHMzTjRk9tL2u9", "_blank")}
						>
							View Location
						</Button>
					</div>

					<div
						className={`flex flex-col items-center transition-all duration-1000 mt-10 ${
							isVisibleRefResepsi ? "opacity-100 delay-500" : "-translate-x-full opacity-0"
						}`}
						ref={refResepsi}
					>
						<span className={`${bradHefferson.className} text-[2.8125em] tracking-wider`}>
							Resepsi
						</span>

						<span className={`${futura.className} text-[0.9375em] tracking-widest font-[1000]`}>
							{dayString}, {dateString} {monthString} {yearString}
						</span>

						<span
							className={`${futura.className} text-[0.9375em] mb-2 tracking-widest font-[1000]`}
						>
							11.00 s/d 14.00 WIB
						</span>

						<span className={`${futura.className} text-[0.9375em] tracking-widest font-semibold`}>
							At GOR Balai Rakyat Condet
						</span>

						<span className={`${futura.className} text-[0.875em] tracking-wider`}>
							Gg. Balai Rakyat No.5, RT.5/RW.5, <br />
							Balekambang, Kec. Kramat jati, <br />
							Kota Jakarta Timur, <br />
							Daerah Khusus Ibukota Jakarta, <br />
							13530, Indonesia
						</span>

						<Button
							className={`bg-white text-neutral-900 mt-2 max-w-max ${futura.className} tracking-wide rounded-lg text-[0.875em] font-semibold`}
							icon={"/icons/location.svg"}
							onClick={() => window.open("https://maps.app.goo.gl/sopPHMzTjRk9tL2u9", "_blank")}
						>
							View Location
						</Button>
					</div>
				</div>
			</div>
		</ImageCarousel>
	);
};

export default CountDownSection;
