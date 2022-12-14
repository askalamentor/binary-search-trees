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

  return sortedArrayToBST(arr);
}

function sortedArrayToBST(arr) {
  // base case
  if (arr.length === 0) return null;

  // get the middle element of the array and make it root
  let middle = Math.floor(arr.length / 2);
  let root = new Node(arr[middle]);

  // recursively build left and right subtrees
  root.right = sortedArrayToBST(arr.slice(0, middle));
  root.left = sortedArrayToBST(arr.slice(middle + 1));

  return root;
}

const a = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(a);
