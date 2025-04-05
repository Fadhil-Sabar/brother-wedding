"use client";

const AnimatedText = ({ text, className, show, fontClass = "" }) => {
	return (
		<p
			className={`${fontClass} ${className} transform transition-all duration-2000 ${
				show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
			}`}
		>
			{text}
		</p>
	);
};

export default AnimatedText;
