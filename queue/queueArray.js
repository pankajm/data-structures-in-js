// Queue implementation using array 

class Queue{

  constructor(){
    this.array = new Array(10);
    this.initialize();
  }

  initialize(){
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item){
    if(!this.isFull()){
      this.array[this.rear] = item;
      this.rear++;
      return;  
    }
    if(this.isSpaceFull()){  // Space optimization
      this.initialize(); 
      this.enqueue(item);
      return
    }
    throw new Error('Queue is full');
  }

  dequeue(){
    if(!this.isEmpty()){
      let value = this.array[this.front]
      this.front++;
      return value;
    }
    throw new Error('Queue is empty');
  }

  peek(){
    if(!this.isEmpty())
      return this.array[this.front];
    throw new Error ('Queue is empty');
  }

  isEmpty(){
    return this.front === this.rear
  }

  isFull(){
    return this.rear === this.array.length;
  }

  isSpaceFull(){
    return (this.rear === this.array.length) && (this.front === this.array.length)
  }

  print(){
    let queue = '';
    for(let i = this.front; i < this.rear; i++){
      queue = queue + this.array[i];
      if(i !== this.rear - 1)
        queue = queue + ' <- ';
    }
    console.log(queue);
  }
}

