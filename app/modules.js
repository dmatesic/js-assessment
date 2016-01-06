exports = (typeof window === 'undefined') ? global : window;

// TODO: Need to more on module pattern in JavaScript
exports.modulesAnswers = {
	createModule : function(str1, str2) {
	  	return (function() {
	  		var module = {};

	  		module.greeting = str1;
	  		module.name = str2;

		  	module.sayIt = function() {
		  		return module.greeting + ', ' + module.name;
		  	}

		  	return module;
		})()
	}
};
