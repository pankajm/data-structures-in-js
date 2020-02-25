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
}