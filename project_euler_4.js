function palindromic() {
  var max = 0;
  for(var i = 999; i > 99; i--) {
    for(var j = 999; j > 99; j--) {
      var n = i * j;
      var s = String(n);
      if (s === s.split("").reverse().join("") && n > max) {
        max = n;
      }
    }
  }
  return max;
}
console.log(palindromic());
