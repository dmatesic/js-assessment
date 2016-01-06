exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	return fn.call(obj); // Could also use apply
  },

  alterObjects : function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
  	// TODO: Why does map only grab internal properties (not prototype)?
  	return _.map(obj, function(value, key) {
  		return key + ': ' + value;
  	});
  }
};
