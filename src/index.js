class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    // remove duplicates and sort array
    const arr = [...new Set(array)].sort((a, b) => a - b);
    console.log(arr);
    // build binary search tree
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    // base case
    if (arr.length === 0) return null;

    // get the middle element of the array and make it root
    let middle = Math.floor(arr.length / 2);
    const root = new Node(arr[middle]);

    // recursively build left and right subtrees
    root.right = this.buildTree(arr.slice(0, middle));
    root.left = this.buildTree(arr.slice(middle + 1));

    return root;
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}

let a = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
a.prettyPrint();
