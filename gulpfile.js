// Various helper modules
var gulp = require("gulp");
var plug = require("gulp-load-plugins")();

var source = [
		'app/**/*.js', 
		"vendor/**/*.*"
	];

gulp.task('webserver', function() {
	return gulp
		.src('app')										// root
		.pipe(plug.webserver({
			livereload: true,							// livereload
			directoryListing: true,
			open: "http://localhost:8000/index.html"	// index.html
	}));
});


// The default task is 'webserver'
gulp.task("default", ["webserver"]);