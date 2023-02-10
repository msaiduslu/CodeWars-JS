//------------------------------- 5. Bir JavaScript dizisinde yinelenen değerleri bulan bir JavaScript programı yazın.----------------------------------------------//

// Examples:
Input: [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10]
Output: 1, 2, 9

const arr = [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10]

function findDuplicates(arr){
  return arr.filter((a,b)=> arr.indexOf(a) !== b)

}
console.log(findDuplicates(arr));