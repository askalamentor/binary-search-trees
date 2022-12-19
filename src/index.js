import Tree from './binaryTree';

// Create an array of random numbers
const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log(array);

const tree = new Tree(array);
console.log(tree.search(tree.root, 67));
console.log('This is the initial tree');
tree.prettyPrint(tree.root);

console.log('Insert 50');
tree.insert(tree.root, 50);
tree.prettyPrint(tree.root);
console.log('Insert 30');
tree.insert(tree.root, 30);
tree.prettyPrint(tree.root);
console.log('Insert 40');
tree.insert(tree.root, 40);
tree.prettyPrint(tree.root);
console.log('Insert 35');
tree.insert(tree.root, 35);
tree.prettyPrint(tree.root);

console.log(tree.search(tree.root, 40));
console.log(tree.search(tree.root, 23));
console.log(tree.search(tree.root, 100));
//tree.printInorder(tree.root);
//tree.printPreorder(tree.root);
tree.printPostorder(tree.root);
const height = tree.height(tree.root);
console.log(`Height is ${height}`);
const balance = tree.isBalanced(tree.root);
console.log(balance);
tree.root = tree.rebalance(tree.root);
console.log(tree);
tree.prettyPrint(tree.root);
