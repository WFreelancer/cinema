import { useLayoutEffect, useState} from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

const Parallax = (ref, payload) => {
	const [elementTop, setElementTop] = useState(0);
	const [clientHeight, setClientHeight] = useState(0);
	const { scrollY } = useScroll();


	const initial = elementTop - clientHeight
	const final = elementTop + 50;

	const yRange = useTransform(scrollY, [initial, final], [-50, 50]);
	

	useLayoutEffect(() => {
		const onResize = () => {
			ref && ref.current && setElementTop(ref.current.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
			setClientHeight(window.innerHeight)
		}
		onResize()
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [ref, payload]);

	return useSpring(yRange, { stiffness: 400, damping: 90 });
}

export {Parallax};

