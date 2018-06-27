jQuery(document).ready(function($){
	var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    $('.more-overlay').addClass('hide');
    
	//open more section
	$('.more').find('a').on('click', function(event){
		event.preventDefault();
		var selected_member = $(this).data('type');
		$('.more-content.'+selected_member+'').addClass('slide-in');
		$('.more-content-close').addClass('is-visible');
        $('.more-overlay').removeClass('hide').addClass('show');

		// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( is_firefox ) {
			$('main').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
		} else {
			$('main').addClass('slide-out');
			$('body').addClass('overflow-hidden');
		}

	});

	//close team-member bio
	$(document).on('click', '.more-content-close, .more-overlay', function(event){
		event.preventDefault();
		$('.more-content').removeClass('slide-in');
		$('.more-content-close').removeClass('is-visible');
        $('.more-overlay').removeClass('show').addClass('hide');

		if( is_firefox ) {
			$('main').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('main').removeClass('slide-out');
			$('body').removeClass('overflow-hidden');
		}
	});
});