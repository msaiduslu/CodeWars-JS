//-------------------------- 6. Elemanları sayılardan oluşan bir listenin elemanlarının karelerinin toplamını bulan bir JavaScript programı yazın.--------------------//

// Examples:
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Output: 285

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumOfSquares(arr) {
  return arr.reduce((acc, numb) => (acc += Math.pow(numb, 2)), 0);
}

console.log(sumOfSquares(arr));