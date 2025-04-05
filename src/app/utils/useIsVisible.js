import { useState, useEffect } from "react";

export default function useIsVisible(ref) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (!isIntersecting) {
			setIntersecting(entry.isIntersecting);
			}
		});

		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [isIntersecting, ref]);

	return isIntersecting;
}
