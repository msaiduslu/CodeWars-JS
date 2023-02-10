function filter_list(l) {
  const filtered = l.filter(index => index === Number(index))
  return filtered
}
console.log(filter_list([1,2,'aasf','1','123',123]));