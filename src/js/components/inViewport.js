import 'Plugins/inViewportPlugin';

// in view port init
export default function initInViewport() {
	jQuery('.viewport-section').each(function() {
		var holder = jQuery(this);
		setTimeout(function() {
			var waypoint = new Waypoint.Inview({
				element: holder.get(0),
				enter: function(direction) {
					if (direction == 'down') {
						holder.addClass('in-viewport');
					}
					if (direction == 'up') {
						holder.removeClass('out-viewport');
					}

				},
				entered: function(direction) {
					if (direction == 'down') {
						holder.addClass('in-viewport');
					}
					if (direction == 'up') {
						holder.removeClass('out-viewport');
					}
				},
				exit: function(direction) {

					if (direction == 'down' ) {
						holder.addClass('out-viewport');
					}
				},
				exited: function(direction) {
				},
			})
		}, 300);
	});
}
