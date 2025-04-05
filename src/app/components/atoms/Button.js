"use client";

import Image from "next/image";

const Button = ({ children, onClick, icon, className = "" }) => {
	return (
		<div
			className={`flex items-center justify-center px-4 py-2 md:hover:cursor-pointer gap-2 ${className}`}
			onClick={onClick}
		>
			{icon && <Image src={icon} alt="Button icon" width={20} height={20} priority />}
			{children}
		</div>
	);
};

export default Button;
