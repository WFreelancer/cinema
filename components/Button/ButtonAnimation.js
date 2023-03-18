import { gsap, Power2, Power4, Elastic} from "gsap";

const mouseMoveAnim = (event) => {
	const sizeScreen = window.matchMedia('(min-width: 1024)');
	const target = event.currentTarget;
	const magnetic = target.getAttribute("data-magnetic");
	if(sizeScreen && magnetic === 'true'){
		let bounding = target.getBoundingClientRect();
		let magnetsStrength = target.getAttribute("data-strength");
		let magnetsStrengthText = target.getAttribute("data-strength-text");
		let spead = target.getAttribute("data-spead");
		
		gsap.to( target, 1.5, {
			x: ((( event.clientX - bounding.left)/target.offsetWidth) - spead) * magnetsStrength,
			y: ((( event.clientY - bounding.top)/target.offsetHeight) - spead) * magnetsStrength,
			rotate: "0.001deg",
			ease: Power4.easeOut
		});
		gsap.to(target.querySelector("[data-magnetic-child]"), 1.5, {
			x: ((( event.clientX - bounding.left)/target.offsetWidth) - spead) * magnetsStrengthText,
			y: ((( event.clientY - bounding.top)/target.offsetHeight) - spead) * magnetsStrengthText,
			rotate: "0.001deg",
			ease: Power4.easeOut
		});
	}
}

const mouseEnterAnim = (event) => {
	const target = event.currentTarget;
	if(target.querySelector("[data-hover-fill]")) {
		gsap.to(target.querySelector("[data-hover-fill]"), .6, {
			startAt: {y: "76%"},
			y: "0%",
			ease: Power2.easeInOut
		});
	}
}

const mouseLeaveAnim = (event) => {
	const sizeScreen = window.matchMedia('(min-width: 1024)');
	const target = event.currentTarget;
	const magnetic = target.getAttribute("data-magnetic");
	if(sizeScreen && magnetic === 'true'){
		gsap.to(target, 1.5, {
			x: 0, 
			y: 0, 
			ease: Elastic.easeOut
		});
		gsap.to(target.querySelector("[data-magnetic-child]"), 1.5, {
			x: 0, 
			y: 0, 
			ease: Elastic.easeOut
		});
	}
	if(target.querySelector("[data-hover-fill]")) {
		gsap.to(target.querySelector("[data-hover-fill]"), .6, {
			y: "-76%",
			ease: Power2.easeInOut
		});
	}
}


export {mouseMoveAnim, mouseEnterAnim, mouseLeaveAnim}
