exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    // TODO: Need to review how this works
    return fn.call(obj);
  },

  functionFunction : function(str) {
    // TODO: Not working
    return (function(str2) { 
      return str + ', ' + str2;
    })
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(item,index) { 
      return (function() { 
        return fn.call(this, arr[index]);
      });
    });
  },

  partial : function(fn, str1, str2) {
    return (function(str3) { 
      return fn.apply(this, [str1, str2, str3]);
    })
  },

  useArguments : function() {
    return _.reduce(arguments, function(memo, num) {
      return memo + num;
    });
  },

  callIt : function(fn) {
    return fn.apply(this, _.toArray(arguments).splice(1));
  },

  partialUsingArguments : function(fn) {
    var fnArguments = _.toArray(arguments).splice(1);

    return (function() {
      return fn.apply(this, fnArguments.concat(_.toArray(arguments)));
    })
  },

  // http://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/
  curryIt : function(fn) {
    // TODO: How to generalize?
    return function (x) {
      return function (y) {
        return function (z) {
          return fn(x,y,z);
        }
      }
    }

// TODO: Why does test expect length of the function with <3 args to be 1? Why not 0?
    /*
    var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    }
    else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2)); 
      }
    }
  };
  */
  }
};
