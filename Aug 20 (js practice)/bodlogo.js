const array = [2, -3, 5, 6, -8, 10];
let i = 0;
let sum = 0;
while ( i < array.length) {
  debugger
  if (array [i] > 0){
    if (array [i] % 2 ==0 ){
      sum = sum + array[i];
    }
  }
  i++; 
}
console.log(sum);

