// Queue implementation using linked list, 
// Kindly update index.html to include this file in script src for testing in browser

const Stack = require('../stack/stackClass');

class Node{
  constructor(value){
    this.data = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    let node = new Node(value);
    if(this.isEmpty()){
      this.front = node;
      this.rear = node;
      return;
    }
    this.rear.next = node;
    this.rear = node;
  }

  dequeue(){
    if(!this.isEmpty()){
      let node = this.front;
      this.front = this.front.next;
      node.next = null;
      if(this.front === null)
        this.rear = null;
      return node.data;
    }
    console.log('Queue is empty');
  }

  isEmpty(){
    return !this.front && !this.rear;
  }

  peek(){
    if(!this.isEmpty())
      return this.front.data;
  }

  print(){
    let tempNode = this.front;
    let string = '';
    while(tempNode !== null){
      string = string + tempNode.data;
      if(tempNode.next !== null)
        string = string + '<-'
      tempNode = tempNode.next;
    }
    console.log(string);
  }

  reverse(){
    const stack = new Stack();
    while(!this.isEmpty())
      stack.push(this.dequeue());
    while(!stack.isEmpty())
      this.enqueue(stack.pop());
    this.print();
  }

}

let queue = new Queue();
queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(1);
queue.enqueue(10);
console.log('queue is ');
queue.print();
console.log('And reverse queue is ')
queue.reverse();
// queue.dequeue();
// queue.print();