
module.exports = function towelSort (matrix) {
  
  if (matrix === undefined) return [];
  
  const result = [];

  if (matrix.length) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        result.push(...matrix[i]);
      } else result.push(...matrix[i].reverse());  
    }
  } else return result;

  return result;
}
