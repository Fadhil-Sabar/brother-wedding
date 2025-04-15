import Image from "next/image";
import Button from "../atoms/Button";
import { futura } from "@/app/utils/customFonts";

const Bank = ({ accountName, accountNumber }) => {
	return (
		<div className="flex flex-col w-80 h-54 justify-between my-5 rounded-4xl bg-white text-black px-3 py-5">
			<div className="flex flex-col justify-end items-end">
				<Image
					src="/images/bank1.png"
					alt="Bank 1"
					width={100}
					height={10}
					priority
					onClick={() => {}}
					className="-mb-5 -my-8"
				/>
				<div className="border-b border-neutral-500 w-full"></div>
			</div>

			<div className="flex flex-col items-end">
				<div className="flex items-center">
					<span
						className={`${futura.className} font-bold text-[1em] text-neutral-500 tracking-wider`}
					>
						{accountNumber}
					</span>
					<Button
						className={`bg-white text-neutral-900 ${futura.className} tracking-wide rounded-lg text-[0.875em] font-semibold transition-colors active:bg-white/50`}
						icon={"/icons/copy.svg"}
						onClick={(e) => {
							navigator.clipboard.writeText(accountNumber);
							e.stopPropagation();
						}}
					></Button>
				</div>
				<span className={`${futura.className} font-bold text-[1em] text-neutral-600`}>
					a/n {accountName}
				</span>
			</div>
		</div>
	);
};
export default Bank;
