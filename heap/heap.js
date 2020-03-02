class Heap{
  constructor(){
    this.array = new Array(20).fill(0);
    this.size = 0;
  }

  insert(node){
    this.array[this.size] = node;
    this.size++;
    this.bubbleUp();
  }

  bubbleUp(){
    let i = this.size - 1;
    let parentIndex = Math.floor((i - 1) / 2);
    while (this.array[i] > this.array[parentIndex]){
      this.swap(i, parentIndex);
      i = parentIndex;
      parentIndex = Math.floor((i - 1) / 2);
    }
  }

  swap(firstIndex, secondIndex){
    let temp = this.array[firstIndex];
    this.array[firstIndex] = this.array[secondIndex];
    this.array[secondIndex] = temp;
  }

  remove(){
    if(this.size === 0)
      return;
    let removedItem = this.array[0];
    this.array[0] = this.array[this.size - 1];
    this.array[this.size - 1] = 0;
    this.size--;
    let parentIndex = 0;
    let childIndex = 0;
    while (parentIndex < this.size){
      childIndex = 2 * parentIndex + 1;
      if(this.array[parentIndex] < this.array[childIndex] || this.array[parentIndex] < this.array[childIndex + 1]){
        if(this.array[childIndex] > this.array[childIndex + 1]){
          this.swap(childIndex, parentIndex);
          parentIndex = childIndex;
        }
        else{
          this.swap(childIndex + 1, parentIndex);
          parentIndex = childIndex + 1;
        }
      }
      else
        break;
    }
    return removedItem;
  }

  print(){
    for(let i = 0; i < this.size; i++)
      console.log(this.array[i]);
  }
}
