/* eslint-disable react-hooks/rules-of-hooks */
import { store, useState, useEffect, getElement } from '@wordpress/interactivity';

// Unlike `data-wp-init` and `data-wp-watch`, you can use any hooks inside
// `data-wp-run` callbacks.
const useInView = (ref) => {
	const [inView, setInView] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setInView(entry.isIntersecting);
		});
		if (ref) observer.observe(ref);
		return () => ref && observer.unobserve(ref);
	}, [ref]);
	return inView;
};

store('namespace/example', {
	callbacks: {
		logInView: () => {
			const { ref } = getElement();
			const isInView = useInView(ref);
			useEffect(() => {
				if (isInView) {
					console.log('Inside');
				} else {
					console.log('Outside');
				}
			});
		},
	},
});
