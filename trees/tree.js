class Node{
  constructor(value){
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }

  insert(value){
    let node = new Node(value);
    if(!this.root){
      this.root = node;
      return;
    }
    let current = this.root;
    while(true){
      if(node.data < current.data){
        if(!current.left){
          current.left = node;
          break;
        }
        current = current.left;
      }
      else if (node.data > current.data){
        if(!current.right){
          current.right = node;
          break;
        } 
        current = current.right;
      }
      else{
        throw new Error('The node value is alread present in the tree');
      }
    }
  }

  preOrder(node){
    if(!node)
      return;
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  inOrder(node){
    if(!node)
      return;
    this.inOrder(node.left)
    console.log(node.data);
    this.inOrder(node.right);
  }

  postOrder(node){
    if(!node)
      return;
    this.postOrder(node.left)
    this.postOrder(node.right)
    console.log(node.data)
  }

  height(node){
    if(!node)
      return -1;
    if(!node.left && !node.right)
      return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right)) 
  }

  minimum(node){
    if(!node)
      return Number.MAX_SAFE_INTEGER;
    if(!node.left && !node.right)
      return node.data;
    let left = this.minimum(node.left);
    let right = this.minimum(node.right);
    return Math.min(Math.min(left,right), node.data);
  }
  
  maximum(node){
    if(!node)
      return Number.MIN_SAFE_INTEGER;
    if(!node.left && !node.right)
      return node.data;
    let left = this.maximum(node.left);
    let right = this.maximum(node.right);
    return Math.max(Math.max(left, right), node.data);
  }

  find(node){
    let current = this.root;
    while(current){
      if(node === current.data)
        return true;
      if(node < current.data)
        current = current.left;
      else if (node > current.data)  
        current = current.right;     
    }
    return false;
  }

  searchBinaryTree(root, value){
    if(!root)
      return false;
    if(root.data === value)
      return true;
    return this.searchBinaryTree(root.left, value) || this.searchBinaryTree(root.right, value);
  }

  equals(tree1, tree2){
    if(!tree1 && !tree2)
      return true;
    if(!tree1 || !tree2)
      return false;
    if(tree1.data !== tree2.data)
      return false;
    return this.equals(tree1.left, tree2.left) && this.equals(tree1.right, tree2.right);
  }

  isBinarySearchTree(tree, min=Number.MIN_SAFE_INTEGER, max=Number.MAX_SAFE_INTEGER){
    if(!tree)
      return true;
    if(tree.data < min || tree.data > max)
      return false;
    return this.isBinarySearchTree(tree.left, min, tree.data - 1) && this.isBinarySearchTree(tree.right, tree.data + 1, max)
  }

  swapNodes(tree){
    let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
  }

  nodesAtDistance(k, tree){
    if(!tree || k < 0)
      return;
    if(k === 0)
      console.log(tree.data);
    this.nodesAtDistance(k - 1, tree.left);
    this.nodesAtDistance(k - 1, tree.right);
  }

  levelOrderTraversal(tree){
    let height = this.height(tree);
    for(let i = 0; i <= height; i++)
      this.nodesAtDistance(i, tree);
  }

  size(root){
    if(!root)
      return 0;
    return 1 + this.size(root.left) + this.size(root.right)
  }

  calculateLeaves(root){
    if(!root)
      return 0;
    if(!root.left && !root.right)
      return 1;
    return this.calculateLeaves(root.left) + this.calculateLeaves(root.right);
  }

  areSiblings(root, node1, node2){
    if(!root || !root.left || !root.right)
      return false;
    if((root.left.data === node1 && root.right.data === node2) || (root.left.data === node2 && root.right.data === node1))
      return true;
    return this.areSiblings(root.left, node1, node2) || this.areSiblings(root.right, node1, node2);
  }

  getAncestors(root, value){
    if(!root)
      return false;
    if(root.data === value)
      return true;
    let isAncestor = this.getAncestors(root.left, value) || this.getAncestors(root.right, value);
    if(isAncestor)
      console.log(root.data); 
    return isAncestor;
  }
}

const tree = new Tree();
tree.insert(7);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(9);
tree.insert(8);
tree.insert(10);

const tree1 = new Tree();
tree1.insert(7);
tree1.insert(4);
tree1.insert(1);
tree1.insert(6);
tree1.insert(9);
tree1.insert(8);
tree1.insert(10);

const tree2 = new Tree();
tree2.insert(7);
tree2.insert(4);
tree2.insert(1);
tree2.insert(6);
tree2.insert(9);
tree2.insert(8);
tree2.insert(10);

// console.log('Pre order traversal -');
// tree.preOrder(tree.root);
// console.log('In order traversal -');
// tree.inOrder(tree.root);
// console.log('Post order traversal -');
// tree.postOrder(tree.root);
// console.log('Height of the tree is '+tree.height(tree.root));
// console.log('Minimum in the tree is '+tree.minimum(tree.root));
// console.log('Maximum in the tree is '+tree.maximum(tree.root));

// console.log('Equality check '+tree.equals(tree1.root, tree2.root))

// console.log('Is binary search tree '+tree.isBinarySearchTree(tree.root));
// tree.swapNodes(tree.root);
// console.log('Is binary search tree '+tree.isBinarySearchTree(tree.root));

// tree.nodesAtDistance(2, tree.root);
// tree.levelOrderTraversal(tree.root);
console.log('size of tree is ' + tree.size(tree.root));
console.log('total leaves of tree are ' + tree.calculateLeaves(tree.root));
console.log('searching binary tree ' + tree.searchBinaryTree(tree.root, 7));
console.log('siblings in binary tree ' + tree.areSiblings(tree.root, 8, 10));
tree.getAncestors(tree.root, 10);
