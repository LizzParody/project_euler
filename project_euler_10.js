/*The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. */

var prime;

function prime(x) {
  var sum = 0;
  for(var num = 2; num <= x; num++){
    prime = true;
    for(var i = 2; i <= Math.sqrt(num); i++){
      if(num % i == 0){
        prime = false;
        break;
      }
    }

    if(prime == true){
      sum += num;
    }
  }

  return sum;
}

console.log(prime(10));
