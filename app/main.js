// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["jquery", 'timecircles', 'css!../bower_components/TimeCircles/inc/TimeCircles'], function($, TimeCircles) {
  
  $('body').append('<div class="example" data-timer="900"></div>');
  
  var tc = new TimeCircles($('.example'), {
	  
  });
  
  $('body').append(tc);
  
});
