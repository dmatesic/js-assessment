exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return parseInt(num.toString(2).split('').reverse()[bit-1]);
  },

  base10: function(str) {
  	return parseInt(str,2);
  },

  convertToBinary: function(num) {
  	var binaryVal = num.toString(2),
  		binaryLen = binaryVal.length;

  	if (binaryLen !== 8) binaryVal = String('0000000' + binaryVal).slice(-8);

  	return binaryVal;
  },

  // http://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript
  multiply: function(a, b) {
  	return parseFloat((a * b).toPrecision(12));
  }
};
