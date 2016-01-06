exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter : function(str) {
    return /([a-zA-Z])\1+/.test(str);
  },

  endsWithVowel : function(str) {
    return /[aeiouy]$/i.test(str);
  },

  captureThreeNumbers : function(str) {
    var matches = str.match(/(\d){3}/)
    return matches ? matches[0] : false;
  },

  matchesPattern : function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },
  isUSD : function(str) {
    // TODO: Not working, having issues with strings like $1,023,032.03
    return /^\$(\d{1,3}|d{1,3},)((\d{3}|,)+|(\.\d{2}))$/.test(str);
  }
};
