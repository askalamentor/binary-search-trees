class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }
}

function buildTree(array) {
  // remove duplicates
  const arr = [...new Set(array)];

  // sort elements
  arr.sort(function (a, b) {
    return a - b;
  });

  return arr;
}

const a = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(a);
