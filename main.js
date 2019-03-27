// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

// Examples

// input: [[  ], [ [ 6 ] ] ]
// output: 3

// input: [ 10, 20, 30, 40 ]
// output: 1

// input: [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]
// output: 4

// input: [ ]
// output: 0

// input: [ [ [ ] ] ]
// output: 0

function nested(arr, depth = 0) {

  let maxDepth=0;
  let currentDepth = 0;
  for (let i = 0; i < arr.length; i++) {
    
    currentDepth = depth + 1;
    
    if(Array.isArray(arr[i])) {
      currentDepth = nested(arr[i], currentDepth);
    }
    
    if(currentDepth > maxDepth) {
      maxDepth = currentDepth;
    }

  }
  
  return maxDepth;
  
}

console.log(nested([ [  ], [ [6 ] ] ])); // 3
console.log(nested([ 10, 20, 30, 40 ])); // 1
console.log(nested([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ])); // 4
console.log(nested([ ])); // 0
console.log(nested([ [ [ ] ] ])); // 0