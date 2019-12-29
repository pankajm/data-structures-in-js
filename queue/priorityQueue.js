class PriorityQueue{
  constructor(){
    this.array = new Array(10).fill(0);
    this.front = 0;
    this.count = 0;
  }

  enqueue(item){
    if(!this.isFull()){
      let index = this.front + this.count - 1;
      while(index >= 0){
        if(item < this.array[index]){
          this.array[index+1] = this.array[index];
          index--;
        }
        else
          break;
      }
      this.array[index+1] = item;
      this.count++;
      return;
    }
    throw new Error('Queue is full');
  }

  dequeue(){
    if(!this.isEmpty()){
      let item = this.array[this.front];
      this.array[this.front] = 0;
      this.front++;
      this.count--;
      return item;
    }
    throw new Error('Queue is empty');
  }

  isEmpty(){
    return this.count === 0;
  }

  isFull(){
    return this.count === this.array.length;
  }

  peek(){
    return this.array[this.front];
  }

  print(){
    let queue = '';
    for(let i = this.front; i < this.front + this.count; i++){
      queue = queue + this.array[i];
      if(i !== (this.front + this.count - 1))
        queue = queue + ' <- ';
    }
    console.log(queue);
  }
}