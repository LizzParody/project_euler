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
