require.config({
  // make components more sensible
  // expose jquery 
  paths: {
    "components": "../bower_components",
    "jquery": "../bower_components/jquery/dist/jquery",
    "timecircles": '../bower_components/TimeCircles/inc/TimeCircles'
  },

  map: {
	  '*': {
	    'css': '../bower_components/require-css/css' // or whatever the path to require-css is
	  }
	}
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}





