/*
Name:           Demo Personal Portfolio 2
Written by:     Okler Themes - (http://www.okler.net)
Theme Version:  10.0.0
*/

(function( $ ) {
	
	'use strict';

	/*
	Locomotive
	*/
	if (typeof LocomotiveScroll !== 'undefined') {

		window.scrollTo(0,0);

		setTimeout(function() {

			const scroller = new LocomotiveScroll({
				el: document.querySelector("[data-scroll-container]"),
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

			$('[data-hash]').off().on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				const anchor = $($(this).attr('href')).get(0);

				scroller.scrollTo(anchor);
			});

		}, 100);

		window.onbeforeunload = function () {
		    window.scrollTo(0,0);
		};

	} else {

		theme.fn.showErrorMessage('Failed to Load File', 'Failed to load: Locomotive Scroll - Include the following file(s): (vendor/locomotive-scroll/locomotive-scroll.min.js)');

	}

}).apply( this, [ jQuery ]);
