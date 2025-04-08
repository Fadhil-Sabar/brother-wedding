import { useState, useEffect } from "react";

export default function useIsVisible(ref, reIntersecting) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (!isIntersecting || reIntersecting) {
				setIntersecting(entry.isIntersecting);
			}
		});

		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [isIntersecting, reIntersecting, ref]);

	return isIntersecting;
}
