exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    // TODO: Is there a smarter way of doing this?
    var retValue;

    if (num % 3 === 0 && num % 5 === 0) retValue = 'fizzbuzz';
    else if (num % 3 === 0) retValue = 'fizz';
    else if (num % 5 === 0) retValue = 'buzz';
    else retValue = parseInt(num,10);

    return retValue;
  }
};
