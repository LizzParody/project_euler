/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
 we can see that the 6th prime is 13. What is the 10001st prime number?*/

What is the 10 001st prime number?
var prime;

function prime(x) {
  var count = 0;
  for(var num = 2; ; num++){
    prime = true;
    for(var i = 2; i <= Math.sqrt(num); i++){
      if(num % i == 0){
        prime = false;
        break;
      }
    }

    if(prime == true){
      count++;
      if(count == x){
        return num;
      }
    }
  }
}

console.log(prime(10001));
