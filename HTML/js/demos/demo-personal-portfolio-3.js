/*
Name:           Demo Personal Portfolio 3
Written by:     Okler Themes - (http://www.okler.net)
Theme Version:  10.0.0
*/

(function( $ ) {
	
	'use strict';

	/*
	Locomotive
	*/
	if (typeof LocomotiveScroll !== 'undefined') {

		setTimeout(function() {

			const pageContainer = document.querySelector("[data-scroll-container]");
			pageContainer.setAttribute("data-scroll-container", "");

			const scroller = new LocomotiveScroll({
				el: pageContainer,
				smooth: true,
				mobile: {
					breakpoint: 0,
					smooth: true
				},
				tablet: {
					breakpoint: 0,
					smooth: true
				}
			});

			ScrollTrigger.scrollerProxy(pageContainer, {
			    scrollTop(value) {
			        return arguments.length ?
			            scroller.scrollTo(value, 0, 0) :
			            scroller.scroll.instance.scroll.y;
			    },
			    getBoundingClientRect() {
			        return {
			            left: 0,
			            top: 0,
			            width: window.innerWidth,
			            height: window.innerHeight
			        };
			    },
			    pinType: pageContainer.style.transform ? "transform" : "fixed"
			});

			const scrollColorElems = document.querySelectorAll("[data-bgcolor]");

			scrollColorElems.forEach((colorSection, i) => {
			    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;

			    ScrollTrigger.create({
			        trigger: colorSection,
			        scroller: "[data-scroll-container]",
			        start: "33% 50%",
			        onEnter: () =>
			            gsap.to(".bg-color-changer", {
			                backgroundColor: colorSection.dataset.bgcolor,
			                overwrite: "auto"
			            }),
			        onLeaveBack: () =>
			            gsap.to(".bg-color-changer", {
			                backgroundColor: prevBg,
			                overwrite: "auto"
			            })
			    });
			});

			$('[data-hash]').off().on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				const anchor = $($(this).attr('href')).get(0);

				$('.hamburguer-btn-side-header.active').trigger('click');

				scroller.scrollTo(anchor);
			});

			scroller.on("scroll", ScrollTrigger.update);

			ScrollTrigger.addEventListener("refresh", () => scroller.update());

			ScrollTrigger.refresh();

			window.scrollTo(0,1);

		}, 100);

		window.onbeforeunload = function () {
		    window.scrollTo(0,0);
		};

	} else {

		theme.fn.showErrorMessage('Failed to Load File', 'Failed to load: Locomotive Scroll - Include the following file(s): (vendor/locomotive-scroll/locomotive-scroll.min.js)');

	}

}).apply( this, [ jQuery ]);
