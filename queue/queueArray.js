// Queue implementation using circular array 

class Queue{

  constructor(){
    this.array = new Array(10).fill(0);
    this.count = 0;
    this.initialize();
  }

  initialize(){
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item){
    if(!this.isFull()){
      this.array[this.rear] = item;
      this.rear = (this.rear + 1) % this.array.length;
      this.count++;
      return;  
    }
    throw new Error('Queue is full');
  }

  dequeue(){
    if(!this.isEmpty()){
      let value = this.array[this.front]
      this.array[this.front] = 0;
      this.front = (this.front + 1) % this.array.length;
      this.count--;
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
    return !this.count
  }

  isFull(){
    return this.count === this.array.length;
  }

  print(){
    let queue = '';
    for(let i = this.front; i < (this.front + this.count); i++){
      queue = queue + this.array[i % this.array.length];
      if(i !== (this.front + this.count - 1))
        queue = queue + ' <- ';
    }
    console.log(queue);
  }
}

