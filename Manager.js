GollumJS.Annotation = {};

GollumJS.Annotation.Manager = new GollumJS.Class ({

	classList: {},

	initialize: function () {
		
		this.classParser =

		this.parseSources ();

	},

	parseSources: function () {

		var _this = this;

		var glob = require("glob");

 		// options is optional 
		glob("src/**/*.js", {}, function (err, files) { 
			if (err) {
				console.log(err);
			}
			_this.parseFiles (files); 
		});
		glob("vendors/GollumJS/**/*.js", {}, function (err, files) { 
			if (err) {
				console.log(err);
			}
			_this.parseFiles (files); 
		});

	},

	parseFiles: function (files) {

 		var fs = require('fs');
		var _this = this;

		for (var i = 0; i < files.length; i++) {
			
			var file = files[i];

			fs.readFile(file, {encoding: 'utf-8'}, function(err,data){
				
				var parser = (new GollumJS.Reflection.ClassParser(data));
				var gjsClassList = parser.classList;
				//console.log (gjsClassList);

			});
		}
	}

});