function fibonacci(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    var result = (fibonacci(n - 1) + fibonacci(n - 2));
    return result;
  }
}

for (var i = 0; i < 10; i++){
  console.log("The fibonacci of " + i + " is " + fibonacci(i));
}
