exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var cancelled = false;

  	// TODO: How to do this without recursion?
  	// TODO: Why need to use self invoking function?
  	(function printCount(n) {
  		if (cancelled) return;
  		else {
  			console.log(n);

	  		if (n < end) {
	  			setTimeout(function(){
	  				printCount(++n);
	  			}, 100);
	  		}
  		}
  	}(start));

  	// TODO: Is there a better way to structure this function (countAnswers.count)?
  	return {
		cancel: function() {
			cancelled = true;
		}
  	};
  }
};

// TODO: Read https://jslinterrors.com/dont-make-functions-within-a-loop
/*for (var i = start; i <= end; i++) {
	(function(n) {
		if (n === start) console.log(n);
		else setTimeout(function() {
			// TODO: this.cancelled is set too late
			if (this.cancelled) return;
			else console.log(n);
		}, 100 * (n-1)); // TODO: Will this work if "start" is not 1?
    })(i);
}*/