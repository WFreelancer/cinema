import { useLayoutEffect, useState} from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

const HeightEl = (ref, payload) => {
	const [elementTop, setElementTop] = useState(0);
	const [clientHeight, setClientHeight] = useState(0);
	const { scrollY } = useScroll();
	let mobile;
	if (typeof window !== 'undefined') {
		mobile = window && window.matchMedia('(min-width: 480)')
	}
	const heightEl = mobile ? 50 : 70;


	const initial = elementTop - clientHeight
	const final = elementTop + 10;

	const height  = useTransform(scrollY, [initial, final], [heightEl, 0]);

	useLayoutEffect(() => {
		const onResize = () => {
			ref && ref.current && setElementTop(ref.current.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
			setClientHeight(window.innerHeight)
		}
		onResize()
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [ref, payload]);

	return useSpring(height, { stiffness: 300, damping: 50 });
}

export {HeightEl};

