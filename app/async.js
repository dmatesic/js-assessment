exports = (typeof window === 'undefined') ? global : window;

// The point of promises is to give us back functional composition and error bubbling in the async world.
// http://www.vasanthk.com/jquery-promises-and-deferred-objects/
exports.asyncAnswers = {
  async : function(value) {
  	var deferredObject = $.Deferred();

  	deferredObject.resolve(value);

  	return deferredObject.promise();
  },

  manipulateRemoteData : function(url) {
  	return $.ajax({
  		url: url,
  		dataFilter: function(data) {
  			return JSON.stringify(
  				_.pluck(
  					JSON.parse(data)
  					.people,
  				'name')
  				.sort()
  			);
  		}
  		/*dataFilter: function(data) {
  			console.log(_.pluck(JSON.parse(data).people, 'name').sort());

  			return _.pluck(JSON.parse(data).people, 'name').sort();
  		}*/
  	});
  }
};
