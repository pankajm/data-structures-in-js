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

  buildHeap(array){
    let lastNonLeafIndex = Math.floor((array.length - 2) / 2);
    for(let i = lastNonLeafIndex;  i >= 0; i--){
      this.heapify(array, i, array.length - 1);
    }
  }

  heapify(array, i, n){
    let largerIndex = i;
    if((2 * i + 1) <= n && array[largerIndex] < array[2 * i + 1])
      largerIndex = 2 * i + 1;
    if((2 * i + 2) <= n && array[largerIndex] < array[2 * i + 2])
      largerIndex = 2 * i + 2;
    if(largerIndex === i)
      return;
    this.swapItems(array, i, largerIndex)
    this.heapify(array, largerIndex, n);
  }

  swapItems(array, firstIndex, secondIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
  }

  heapsort(array){
    this.buildHeap(array);
    let lastIndex = array.length - 1
    for(let i = lastIndex; i >= 0; i--){
      this.swapItems(array, 0, i)
      this.heapify(array, 0, i - 1);
    }
    return array;
  }

  print(){
    for(let i = 0; i < this.size; i++)
      console.log(this.array[i]);
  }
}
