A = new Array(+prompt('Введите длину массива n = ')); 

for (i = 0; i < A.length; i++) {
  A[i] = Math.floor(Math.random()*51);
}
console.log(A); 

let m = A.length - 1;
let temp = 0;
for (j = 0; j < m / 2; j++) {
  temp = A[m - j];
  A[m - j] = A[j];
  A[j] = temp;
}
console.log(A);