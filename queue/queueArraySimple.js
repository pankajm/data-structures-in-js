class Queue{
  constructor(){
    this.rear = 0;
    this.front = 0;
    this.data = new Array(10).fill(0);
  }

  enqueue(value){ 
    if(!this.isFull()){
      this.data[this.rear] = value;
      this.rear++;
      return;
    }
    console.log('Queue is full');
  }

  dequeue(){
    if(!this.isEmpty()){
      const value = this.data[this.front];
      this.data[this.front] = 0;
      this.front++;
      return value;
    }
    console.log('Queue is empty');
  }

  peek(){
    return this.data[this.front];
  }

  isEmpty(){
    return this.front === this.rear;
  }

  isFull(){
    return this.rear === this.data.length;
  }

  print(){
    let index = this.front;
    let printString = '';
    while(index < this.rear){
      printString += this.data[index];
      if(index + 1 !== this.rear)
        printString += '<-';
      index++;
    }
    console.log(printString);
  }
}