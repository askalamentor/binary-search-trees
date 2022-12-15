import Node from './node';

class Tree {
  constructor(array) {
    // remove duplicates and sort array
    const arr = [...new Set(array)].sort((a, b) => a - b);

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
    root.left = this.buildTree(arr.slice(0, middle));
    root.right = this.buildTree(arr.slice(middle + 1));

    return root;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.data) {
        // if the value smaller than root, add left side
        if (currentNode.left === null) {
          currentNode.left = new Node(value);
          return;
        }
        currentNode = currentNode.left;
      } else {
        // if the value bigger than root, add right side
        if (currentNode.right === null) {
          currentNode.right = new Node(value);
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  deleteNode(root, key) {
    // base case: if the tree is empty
    if (root === null) {
      return 'Tree is empty';
    }
    // otherwise, recursively down the tree
    if (key < root.data) {
      root.left = this.deleteNode(root.left, key);
      return root;
    } else if (key > root.data) {
      root.right = this.deleteNode(root.right, key);
      return root;

      // this is the node to be deleted
    } else {
      // node with only one child or no child
      if (root.right === null && root.left === null) return null;
      else if (root.left === null) return root.right;
      else if (root.right === null) return root.left;
      else {
        // node with two children: Get the inorder
        // successor (smallest in the right subtree)
        root.data = this.minValue(root.right);
        root.right = this.deleteNode(root.right, root.data);
      }
    }
    return root;
  }

  minValue(root) {
    let minv = root.data;
    while (root.left != null) {
      minv = root.left.data;
      root = root.left;
    }
    return minv;
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
console.log('This is the initial tree');
a.prettyPrint();

console.log('Insert 50');
a.insert(50);
a.prettyPrint();
console.log('Insert 30');
a.insert(30);
a.prettyPrint();
console.log('Insert 40');
a.insert(40);
a.prettyPrint();
console.log('Delete 4');
a.deleteNode(a.root, 4);
a.prettyPrint();
console.log('Delete 23');
a.deleteNode(a.root, 23);
a.prettyPrint();

//
