function largestPrimeFactor(number) {
  var i = 2;
  while (i <= number){
    if (number % i === 0) {
      number /= i;
    } else {
      i++;
    }
  }
  console.log(i);
}

var num = 600851475143;
largestPrimeFactor(num);
