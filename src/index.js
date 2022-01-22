
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    return [];
  }
  let acc = [];
for(let i = 0; i < matrix.length; i++) {
  if(i % 2 === 0 || i === 0) {
    acc.push(...matrix[i])
  } else {
    acc.push(...matrix[i].reverse());
  }
}
return acc
}
