function largestPrimeFactor(num){
	for(i = 2; i < num; i++){
		if(num % i === 0){
			num /= i;
		}
	}
	return i;
}

var num = 600851475143;
largestPrimeFactor(num);

//With a while loop

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
