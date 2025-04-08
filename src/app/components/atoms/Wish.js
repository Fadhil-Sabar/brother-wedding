import useIsVisible from "@/app/utils/useIsVisible";
import { memo, useRef } from "react";

const Wish = ({ data, index }) => {
	const refWish = useRef(null);
	const isVisibleRefWish = useIsVisible(refWish, true);

	return (
		<div
			className={`flex flex-col bg-white snap-end rounded-3xl py-2 px-5 tracking-wider transition-all duration-1000 
                ${isVisibleRefWish ? `translate-x-0 opacity-100` : "-translate-x-full opacity-0"}`}
			ref={refWish}
		>
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

export default memo(Wish);
