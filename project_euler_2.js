var fib = [0 ,1];
var sum = 0;
var i = 0;

while (fib[0] + fib[1] < 4000000){
  i = fib[0] + fib[1];
  fib[0] = fib[1];
  fib[1] = i;

  if (i % 2 === 0) {
    sum += i;
  }
}
