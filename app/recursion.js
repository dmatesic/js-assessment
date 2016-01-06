exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {

	// TODO: How to recursivly call listFiles? How to return array?
  listFiles: function(data, dirName) {
	var arr = [];
	var listFilesInternal = function(data) {
		_.each(data, function(val, key) {
            if (key === 'dir') currentDir = val;
          
			if (_.isNumber(key) && _.isString(val)) {
              if (!dirName || (dirName && currentDir === dirName)) arr.push(val);
            }
	     	else if (!_.isString(val)) listFilesInternal(val);              
	     });
	};
	
	listFilesInternal(data);
	return arr;
  },

  // Using heap's algorithm https://en.wikipedia.org/wiki/Heap%27s_algorithm
  permute: function(arr) {
	var n = arr.length;
	var perumtations = [];
	var iterations = 0;

	Array.prototype.swap = function(x,y) {
	  var b = this[y];
	  this[y] = this[x];
	  this[x] = b;
	}
	
	var permuteInternal = function(n, arr) {

	iterations++;
	if (iterations > 100) return; // Useful for issues during dev that cause stack overflow

	  if (n === 1) {
	    perumtations.push(_.clone(arr)); // Clone to avoid circular reference
	  }
	  else {
	  	// NOTE: Don't forgot var in the for loop!!!
	    for (var i=0; i<n-1; i++) {
	      permuteInternal(n-1, arr);
	      if (n % 2 === 0) arr.swap(i,n-1);
	      else arr.swap(0,n-1);
	    }
	    permuteInternal(n-1, arr);
	  }
	};
	
	permuteInternal(n,arr);
	return perumtations;
  },

  fibonacci: function(n) {
  	if (n === 0) return 0;
  	if (n === 1) return 1;
  	else return recursionAnswers.fibonacci(n-1) + recursionAnswers.fibonacci(n-2);
  },

  validParentheses: function(n) {
  		
  }
};
