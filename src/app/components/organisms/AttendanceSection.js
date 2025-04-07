import { futura, luxiaDisplay } from "@/app/utils/customFonts";
import Image from "next/image";
import { useState } from "react";
import { QueryClient, QueryClientProvider, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { postAttendance } from "@/app/services/api/wedding";

const SubmitStatus = ({ isLoading, isSuccess, isError, error }) => {
	// if (isLoading) {
	// return (
	// 	<div
	// 		className={`${futura.className} tracking-wider font-semibold flex items-center fixed top-0 right-0 m-5 w-54 h-auto p-2 text-[0.875em] min-h-12 rounded-xl bg-yellow-600`}
	// 	>
	// 		Mengirim pesan Anda...
	// 	</div>
	// );
	// }
	// if (isSuccess) {
	// 	return <div className="bg-green-600">Terima kasih! Pesan Anda telah terkirim.</div>;
	// }
	// if (isError) {
	// 	return <div className="bg-red-600">Terjadi kesalahan: {error.message}</div>;
	// }
	// return null;
};

const AttendanceSection = () => {
	const [formAttendance, setFormAttendance] = useState({
		name: "",
		message: "",
		confirm: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormAttendance((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const queryWedding = useQuery({
		queryKey: ["wedding"],
		queryFn: async () => {
			const response = await axios.get(`/api/wedding`);

			return response.data;
		},
	});

	const mutationSubmit = useMutation({
		mutationFn: postAttendance,
		onSuccess: () => {
			queryWedding.refetch();
			setFormAttendance({
				name: "",
				message: "",
				confirm: "",
			});
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formAttendance.name || !formAttendance.message || !formAttendance.confirm) {
			alert("Harap isi semua kolom.");
			return;
		}
		mutationSubmit.mutate(formAttendance);

		setTimeout(() => {
			mutationSubmit.reset();
		}, 3000);
	};

	return (
		<div className="flex flex-col min-h-screen items-center bg-white text-black text-[16px] tracking-wide">
			<SubmitStatus
				isLoading={mutationSubmit.isLoading}
				isSuccess={mutationSubmit.isSuccess}
				isError={mutationSubmit.isError}
				error={mutationSubmit.error}
			/>
			<div className="flex justify-center">
				<Image
					src="/images/divider1.png"
					alt="Divider"
					width={200}
					height={200}
					className="w-full -m-10 object-contain"
				/>
			</div>
			<span className={`text-[1.75em] text-center mb-4 ${luxiaDisplay.className}`}>RSVP</span>

			<div className="bg-linear-to-b max-w-2xl min-w-sm from-neutral-600 to-neutral-700 rounded-t-4xl">
				<div className={`flex flex-col h-[80svh] pt-8 p-5 font-roboto gap-2`}>
					<div className="flex flex-col snap-y gap-3 overflow-scroll">
						{!queryWedding.isLoading &&
							queryWedding.data.map((wish, index) => (
								<Wish
									key={index}
									data={{
										name: wish.name,
										message: wish.message,
										confirm: wish.confirm,
									}}
								/>
							))}
					</div>
				</div>

				<div className={`flex flex-col p-5 gap-3 ${futura.className}`}>
					<input
						type="text"
						placeholder="Nama"
						className="border px-3 py-2 rounded bg-white"
						name="name"
						value={formAttendance.name}
						onChange={handleInputChange}
					/>
					<textarea
						placeholder="Ucapan"
						className="border px-3 py-2 rounded bg-white"
						name="message"
						value={formAttendance.message}
						onChange={handleInputChange}
					/>
					<select
						className="border px-3 py-2 rounded bg-white"
						name="confirm"
						value={formAttendance.confirm}
						onChange={handleInputChange}
					>
						<option value="" disabled>
							Konfirmasi Kehadiran
						</option>
						<option value="hadir">Hadir</option>
						<option value="tidak_hadir">Tidak Hadir</option>
					</select>

					<div className="flex justify-end">
						<button
							className="bg-white px-3 py-2 rounded mt-4 w-20"
							onClick={handleSubmit}
							disabled={mutationSubmit.isLoading}
						>
							Kirim
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const Wish = ({ data }) => {
	return (
		<div className="flex flex-col bg-white snap-start rounded-3xl py-2 px-5 tracking-wider">
			<div className="gap-2 flex">
				<span className="text-black text-[0.875em]">{data.name}</span>
				<span className="text-black/60 text-[0.875em]">
					{data.confirm === "hadir" ? "✅" : "❌"}
				</span>
			</div>
			<span className="text-black/60 text-[0.875em]">{data.message}</span>
		</div>
	);
};

const queryClient = new QueryClient();

export default function Index() {
	return (
		<QueryClientProvider client={queryClient}>
			<AttendanceSection />
		</QueryClientProvider>
	);
}
