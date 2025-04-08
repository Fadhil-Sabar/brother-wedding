import Image from "next/image";
import Button from "../atoms/Button";
import { futura } from "@/app/utils/customFonts";

const Bank = ({ accountName, accountNumber }) => {
	return (
		<div className="flex flex-col items-center">
			<Image
				src="/images/bank1.png"
				alt="Bank 1"
				width={200}
				height={10}
				priority
				onClick={() => {}}
				className="-mb-5"
			/>

			<span className={`${futura.className} font-bold text-[1em]`}>a/n {accountName}</span>
			<span className={`${futura.className} font-bold text-[1em]`}>{accountNumber}</span>

			<Button
				className={`bg-white text-neutral-900 ${futura.className} tracking-wide rounded-lg text-[0.875em] font-semibold mt-3 transition-colors active:bg-white/50`}
				icon={"/icons/copy.svg"}
				onClick={(e) => {
					navigator.clipboard.writeText(accountNumber);
					e.stopPropagation();
				}}
			>
				Copy Number
			</Button>
		</div>
	);
};
export default Bank;
