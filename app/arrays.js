exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return _.indexOf(arr, item);
  },

  sum : function(arr) {
    return _.reduce(arr, function(sum, element) {
      return sum + element;
    }, 0);
  },

  remove : function(arr, item) {
    return _.without(arr, item);
  },

  removeWithoutCopy : function(arr, item) {
    // TODO: Why doesn't _.without work?

    // Note: Looping over arr backwards so splice doesn't affect the index while loopinf
    var i = arr.length;
    while(i--) if (arr[i] === item) arr.splice(i, 1);
    
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return _.countBy(arr, function(element) {
      return element === item; 
    }).true;
  },

  duplicates : function(arr) {
    // TODO: How efficient is this?
    return _.chain(arr).filter(function(item) {
      return arr.indexOf(item) !== arr.lastIndexOf(item);
    }).uniq().value();
  },

  square : function(arr) {
    return arr.map(function(item) {
      return item * item;
    });
  },

  findAllOccurrences : function(arr, target) {
    return _.without(arr.map(function(item, index) {
      if (item === target) return index;
    }), undefined)
  }
};
