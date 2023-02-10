// --------------------------------------3. verilen pozitif olmayan bir tamsayıyı argüman olarak alan ve rakamları azalan sırada----------------------------------//
//--------------------------------------döndüren bir fonksiyon yazmaktır. Özetle, rakamları yeniden düzenleyerek mümkün olan en yüksek sayıyı oluşturun.---------//
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

const numb = 42145

function descendingOrder(numb){

  return Number(numb.toString().split("").sort((a,b)=> a - b).reverse().join(""))

}
console.log(descendingOrder(numb));