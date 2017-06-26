/* 2520 is the smallest number that can be divided by each of the numbers from
1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*/

//With a for loop (is very slow, takes 4 billion computations)
var match;
for(var i = 21; ; i++){
  match = true;
  for(var j = 1; j <=20; j++){
    if(i % j != 0){
      match = false;
      break;
    }
  }
  if(match == true)
    break;
}
console.log(i);


var steps = 0;

//With an algorithm very efficient, using greatest common divisor
//a has to be greater than b!
function gcd(a, b) {
  if(b == 0){
    return a;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b)/gcd(a ,b);
}

function findMagicNumber(num) {
  var lcmSoFar = 1;
  for (var i = 1; i <= num; i++) {
    lcmSoFar = lcm(i, lcmSoFar);
  }
  return lcmSoFar;
}
console.log(findMagicNumber(20));
