export const animationImage = {
	hidden: {
		scale: 1.5,
		opacity: 0,
		clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
	},
	visible: delay => ({
		scale: 1.05,
		opacity: 1,
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		transition: {
			delay: delay,
			duration: 1,
			type: "tween"
		}
	})
}

export const animationCard = {
	hidden: {
		opacity: 0,
		y: 100
	},
	visible: custom => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
		}
	})
}

export const animationImageCard = {
	hidden: {
		scale: 1.3,
		opacity: 0,
		clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
	},
	visible: custom => ({
		scale: 1.05,
		opacity: 1,
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		transition: {
			delay: custom * 0.2,
			duration: 1,
			type: "tween"
		}
	})
}

export const animationImagePageMovie = {
	hidden: {
		opacity: 0,
		clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
	},
	visible: {
		opacity: 1,
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		transition: {
			duration: 1,
			type: "tween"
		}
	}
}

export const animationContent = {
	hidden: {
		opacity: 0,
		y: 100
	},
	visible: custom => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: custom * 0.2,
			duration: 0.4,
			type: "tween"
		}
	})
}
