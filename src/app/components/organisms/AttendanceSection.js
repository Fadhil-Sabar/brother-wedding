import { futura, luxiaDisplay } from "@/app/utils/customFonts";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { QueryClient, QueryClientProvider, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { postAttendance } from "@/services/api/wedding";
import { useSearchParams } from "next/navigation";
import Wish from "../atoms/Wish";

const SubmitStatus = ({ isLoading, isSuccess, isError, error }) => {
	return (
		<div>
			<div
				className={`${
					futura.className
				} z-10 tracking-wider font-semibold flex items-center fixed top-0 right-0 m-5 w-54 h-auto p-2 text-[0.875em] min-h-12 rounded-xl bg-amber-500 transition-all duration-500
						${isLoading ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
						`}
			>
				Mengirim pesan Anda...
			</div>
			<div
				className={`${
					futura.className
				} z-10 tracking-wider font-semibold flex items-center fixed top-0 right-0 m-5 w-54 h-auto p-2 text-[0.875em] min-h-12 rounded-xl bg-green-500 transition-all duration-500
						${isSuccess ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
			>
				Terima kasih! Pesan Anda telah terkirim.
			</div>
			<div
				className={`${
					futura.className
				} z-10 tracking-wider font-semibold flex items-center fixed top-0 right-0 m-5 w-54 h-auto p-2 text-[0.875em] min-h-12 rounded-xl bg-red-500 transition-all duration-500
						${isError ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
			>
				{error?.message}
			</div>
		</div>
	);
};

const AttendanceSection = () => {
	const searchParams = useSearchParams();
	const name = searchParams.get("u");
	const refWishContainer = useRef(null);

	const [wishList, setWishList] = useState([]);

	const [formAttendance, setFormAttendance] = useState({
		name: name || "",
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

			if (wishList.length === 0) {
				setWishList(response.data);
			} else {
				if (response.data.length > wishList.length) {
					setWishList((prev) => [...prev, response.data[response.data.length - 1]]);
				}
			}

			return response.data;
		},
	});

	const mutationSubmit = useMutation({
		mutationFn: postAttendance,
		onSuccess: () => {
			queryWedding.refetch();
			setFormAttendance({
				name: name,
				message: "",
				confirm: "",
			});
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formAttendance.name || !formAttendance.message || !formAttendance.confirm) {
			alert("Harap isi pesan dan konfirmasi kehadiran.");
			return;
		}
		mutationSubmit.mutate(formAttendance);

		setTimeout(() => {
			mutationSubmit.reset();
		}, 3000);
	};

	useEffect(() => {
		if (mutationSubmit.isSuccess && refWishContainer.current) {
			refWishContainer.current.scrollTo({
				top: refWishContainer.current.scrollHeight,
				behavior: "smooth",
			});
		}
	}, [mutationSubmit]);

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

			<div className="bg-linear-to-b max-w-2xl min-w-full md:min-w-2xl from-neutral-600 to-neutral-700 rounded-4xl mb-5">
				<div className={`flex flex-col h-[65svh] pt-8 p-5 font-roboto gap-2`}>
					<div
						className={`flex flex-col snap-y h-full gap-3 overflow-y-auto transition-all duration-500`}
						ref={refWishContainer}
					>
						{!queryWedding.isLoading &&
							wishList.map((wish, index) => (
								<Wish
									key={index}
									data={{
										name: wish.name,
										message: wish.message,
										confirm: wish.confirm,
									}}
									index={index}
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
						value={name || ""}
						disabled
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

const queryClient = new QueryClient();

export default function Index() {
	return (
		<QueryClientProvider client={queryClient}>
			<AttendanceSection />
		</QueryClientProvider>
	);
}
