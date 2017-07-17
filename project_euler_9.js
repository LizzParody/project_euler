for(var a = 1; a < 500; a++){
  for(var b = a; b < 1000; b++){
    var c = Math.sqrt(a * a + b * b);
    if(c > b && Number.isInteger(c) && a + b + c == 1000){
      console.log(a, b, c);
    }
  }
}
