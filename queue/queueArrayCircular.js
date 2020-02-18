class Queue{
  constructor(){
    this.rear = 0;
    this.front = 0;
    this.count = 0;
    this.data = new Array(10).fill(0);
  }

  enqueue(value){ 
    if(!this.isFull()){
      this.data[this.rear] = value;
      this.rear = (this.rear + 1) % this.data.length;
      this.count++;
      return;
    }
    console.log('Queue is full');
  }

  dequeue(){
    if(!this.isEmpty()){
      const value = this.data[this.front];
      this.data[this.front] = 0;
      this.front = (this.front + 1) % this.data.length;
      this.count--;
      return value;
    }
    console.log('Queue is empty');
  }

  peek(){
    if(!this.isEmpty())
      return this.data[this.front];
  }

  isEmpty(){
    return !this.count;
  }

  isFull(){
    return this.count === this.data.length;
  }

  print(){
    let index = this.front;
    let itemsLeft = this.count;
    let printString = '';
    while(itemsLeft){
      printString += this.data[index];
      itemsLeft--;
      if((index + 1) % this.data.length !== this.rear)
        printString += '<-';
      index = (index + 1) % this.data.length;
    }
    console.log(printString);
  }
}