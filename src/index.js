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

  search(root, key) {
    // base cases: root is null or key is present at root
    if (root === null) return 'Key is not available';
    if (root.data === key) return `${root.data} is available`;

    // key is greater than root's key
    if (root.data < key) {
      return this.search(root.right, key);
    }
    // key is smaller than root's key
    else {
      return this.search(root.left, key);
    }
  }

  insert(root, key) {
    // if the tree is empty, return a new mode
    if (root === null) {
      root = new Node(key);
      return root;
    }

    // otherwise, recur down the tree
    if (key < root.data) {
      root.left = this.insert(root.left, key);
    } else if (key > root.data) {
      root.right = this.insert(root.right, key);
    }

    return root;
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

        // Delete the inorder successor
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

  printLevelOrder() {
    let queue = [];
    queue.push(this.root);

    while (queue.length != 0) {
      let tempNode = queue.shift();
      console.log(tempNode);

      // enqueue left child
      if (tempNode.left != null) {
        queue.push(tempNode.left);
      }

      // enqueue right child
      if (tempNode.right != null) {
        queue.push(tempNode.right);
      }
    }
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

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree.search(tree.root, 67));
console.log('This is the initial tree');
tree.prettyPrint();

console.log('Insert 50');
tree.insert(tree.root, 50);
tree.prettyPrint();
console.log('Insert 30');
tree.insert(tree.root, 30);
tree.prettyPrint();
console.log('Insert 40');
tree.insert(tree.root, 40);
tree.prettyPrint();
console.log('Delete 4');
tree.deleteNode(tree.root, 4);
tree.prettyPrint();
console.log('Delete 23');
tree.deleteNode(tree.root, 23);
tree.prettyPrint();
console.log(tree.search(tree.root, 40));
console.log(tree.search(tree.root, 23));
console.log(tree.search(tree.root, 100));
tree.printLevelOrder();
