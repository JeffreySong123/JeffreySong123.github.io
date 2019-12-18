function welcome() {
anime.timeline()
		.add({
    		targets: '.line',
    		opacity: [0,1],
    		scaleX: [0, 1],
    		easing: "easeInOutExpo",
    		duration: 700
		}).add({
    		targets: '.line',
    		easing: "easeInOutExpo",
    		translateY: (el, i) => (-0.625 + 0.625*2.5*i) + "em",
    		duration: 700,
  		}).add({
			targets: '#left',
    		opacity: [0,1],
    		translateX: [-1, "0.01em"],
    		easing: "easeOutExpo",
    		duration: 1000,
    		offset: "-=50",
		}).add({
			targets: '#right',
    		opacity: [0,1],
    		translateX: [1, "-0.01em"],
    		easing: "easeOutExpo",
    		duration: 1000,
    		offset: "-=1000",
		}).add({
			targets: '.moto',
			easing: "easeInOutExpo",
			opacity: [0, 1],
			duration: 700,
			offset: "-=1200",
		}).add({
			targets: '.moto',
		});
};