var countBits = function(n) {
  const binary = n.toString(2).split("")
   const array = binary.map((a)=>Number(a))
   console.log(array);
   const result = array.reduce((a,b)=>a+b)
   return result
};

console.log(countBits(5));