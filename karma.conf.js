module.exports = function(config) {
  config.set({
    basePath: '',
	singleRun: true,
    frameworks: ['jasmine'],
	browsers: ['PhantomJS'],
    files: [
		"bower_components/jquery-2.1.0.min/index.js",
    "bower_components/angular/angular.js",
		
		//karmabegin    
		  'tests/app.js'    
		//karmaend
		
		, 'tests/**/*.js' // files that contain tests
    ]
  });
};
