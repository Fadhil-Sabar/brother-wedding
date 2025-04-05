import { futura, luxiaDisplay } from "@/app/utils/customFonts";
import Image from "next/image";

const AttendanceSection = () => {
	return (
		<div className="flex flex-col min-h-screen bg-white text-black text-[16px] tracking-wide">
			<div className="flex justify-center">
				<Image
					src="/images/divider1.png"
					alt="Divider"
					width={200}
					height={200}
					className="w-full h-40 -m-15 object-contain"
				/>
			</div>
			<span className={`text-[1.75em] text-center mb-4 ${luxiaDisplay.className}`}>RSVP</span>

			<div className="bg-linear-to-b from-neutral-600 to-neutral-700 rounded-t-4xl">
				<div className={`flex flex-col h-[80svh] pt-8 p-5 font-roboto gap-2`}>
					<div className="flex flex-col snap-y gap-3 overflow-scroll">
						<Wish />
						<Wish />
						<Wish />
						<Wish />
						<Wish />
						<Wish />
						<Wish />
						<Wish />
						<Wish />
						<Wish />
					</div>
				</div>

				<div className={`flex flex-col p-5 gap-3 ${futura.className}`}>
					<input type="text" placeholder="Nama" className="border px-3 py-2 rounded bg-white" />
					<textarea placeholder="Ucapan" className="border px-3 py-2 rounded bg-white" />
					<select className="border px-3 py-2 rounded bg-white">
						<option value="" disabled selected>
							Konfirmasi Kehadiran
						</option>
						<option value="hadir">Hadir</option>
						<option value="tidak hadir">Tidak Hadir</option>
					</select>

					<div className="flex justify-end">
						<button className="bg-white px-3 py-2 rounded mt-4 w-20">Kirim</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const Wish = () => {
	return (
		<div className="flex flex-col bg-white snap-start rounded-3xl py-2 px-5 tracking-wider">
			<span className="text-black text-[0.875em]">Nama</span>
			<span className="text-black/60 text-[0.875em]">
				Ucapan asdoaisdju oaijsod aoisjd oaosdij aojsodj asjdoajso djiajsod jaoisjd oajsid
			</span>
		</div>
	);
};
export default AttendanceSection;
