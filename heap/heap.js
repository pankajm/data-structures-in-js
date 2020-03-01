class Heap{
  constructor(){
    this.array = new Array(20).fill(0);
    this.index = 0;
  }

  insert(node){
    this.array[this.index] = node;
    this.index++;
    let i = this.index - 1;
    let parentIndex = 0;
    while (i > 0){
      parentIndex = Math.floor((i - 1) / 2);
      if(this.array[i] > this.array[parentIndex]){
        let temp;
        if(this.array[2 * parentIndex + 1] > this.array[2 * parentIndex + 2]){
          temp = this.array[2 * parentIndex + 1];
          this.array[2 * parentIndex + 1] = this.array[parentIndex];
          this.array[parentIndex] = temp;
        }
        else{ 
          temp = this.array[2 * parentIndex + 2];
          this.array[2 * parentIndex + 2] = this.array[parentIndex];
          this.array[parentIndex] = temp;
        }
        i = parentIndex;
      }
      else 
        break;
    }
  }

  remove(){
    if(this.index === 0)
      return;
    let removedItem = this.array[0];
    this.array[0] = this.array[this.index - 1];
    this.array[this.index - 1] = 0;
    this.index--;
    let parentIndex = 0;
    let childIndex = 0;
    while (parentIndex < this.index){
      childIndex = 2 * parentIndex + 1;
      if(this.array[parentIndex] < this.array[childIndex] || this.array[parentIndex] < this.array[childIndex + 1]){
        if(this.array[childIndex] > this.array[childIndex + 1]){
          let temp = this.array[childIndex];
          this.array[childIndex] = this.array[parentIndex];
          this.array[parentIndex] = temp;
          parentIndex = childIndex;
        }
        else{
          let temp = this.array[childIndex + 1];
          this.array[childIndex + 1] = this.array[parentIndex];
          this.array[parentIndex] = temp;
          parentIndex = childIndex + 1;
        }
      }
      else
        break;
    }
    return removedItem;
  }

  print(){
    for(let i = 0; i < this.index; i++)
      console.log(this.array[i]);
  }
}
