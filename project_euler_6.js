var n = 0;
var sum = 0;
var sum2 = 0;
for(var i = 1; i <= 100; i++){
  n = Math.pow(i, 2);
  sum += n;
}

for(var i = 1; i <= 100; i++){
  sum2 += i;
}
var answer = Math.pow(sum2, 2);

console.log(answer - sum);
