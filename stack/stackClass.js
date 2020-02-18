class Node{
  constructor(value){
    this.data = value;
    this.next = null;
  }
}

class Stack{

  constructor(){
    this.top = null;
  }

  push(value){
    let node = new Node(value);
    if(this.top === null){
      this.top = node;
      return;
    }
    node.next = this.top;
    this.top = node;
  }

  pop(){
    if(!this.isEmpty()){
      let node = this.top;
      this.top = this.top.next;
      node.next = null;
      return node.data;
    }
    console.error('Stack is empty');
  }

  isEmpty(){
    return this.top === null;
  }

  peek(){
    return this.top.data;
  }

  print() {
    let node = this.top;
    while(node !== null){
      console.log(node.data);
      node = node.next;
    }
  }
}

