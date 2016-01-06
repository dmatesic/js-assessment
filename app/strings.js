exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
	// TODO: Look into performance of adding to new array vs. splicing
	// TODO: Is converting to array necessary? Some way to use regex?
  	var arr = str.split('');
	var arrReduced = [];
	var count;

	_.each(arr, function(item, index, list) {
	  if (index === 0) count = 1;
	  else if (list[index-1] === item) count++;
	  else count = 1;
	  
	  if (amount >= count) arrReduced.push(item);
	});

	return arrReduced.join('');
  },
  wordWrap: function(str, cols) {
  	// TODO: There has to be a better way to do this..
	var arr = str.split('');
	var arrWrapped = [];
	var addNewline = false;

	_.each(arr, function(item, index, list) {
      
      // Find next gap (whitespace) in the string
      var nextGap = _.findIndex(_.clone(arr).splice(index+1), function(item) {
        return item.trim().length === 0;
      }) + index+1;
      
      // Get ready to add a newline if col limit reached or next gap is past col limit
	  if ((index+1) % cols === 0 || nextGap > cols) addNewline = true;

	  // Add newline if ready to add new line and gap found
	  if (addNewline && item.trim().length === 0)
	  {
	    addNewline = false;
	    arrWrapped.push('\n');
	  } else arrWrapped.push(item);
	});

	return arrWrapped.join('');
  },
  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
