// Queue implementation using linked list, 
// Kindly update index.html to include this file in script src for testing in browser

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
    if(!this.front && !this.rear){
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

}