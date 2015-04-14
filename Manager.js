GollumJS.Annotation = {};

GollumJS.Annotation.Manager = new GollumJS.Class ({

	classList: {},

	initialize: function () {
		
		this.parseSources ();

	},

	parseSources: function () {

		var glob = require("glob")
 		var fs = require('fs');
		var esprima = require('esprima');

 		// options is optional 
		glob("**/*.js", {}, function (er, files) {
			for (var i = 0; i < files.length; i++) {
				
				var file = files[0];

				fs.readFile(file, {encoding: 'utf-8'}, function(err,data){
					if (!err) {

						var tokens = esprima.tokenize('var answer = 42');
    					
					} else {
						console.log(err);
					}
				});

			}
		})
	}
});