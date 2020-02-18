/*
  *** Implementation of array class in javascript ***
*/ 

class Array{
  constructor(){
    this.data = {}
    this.length = 0;
  }

  push(element){
    this.data[this.length] = element;
    this.length++;
    return this.data;
  }

  pop(){
    const element = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return element;
  }

  insertAt(index, value){
    if(index > this.length)
      throw new Error('Invalid Index');

    // Need to shift all elements greater than index to one position right

    this.length++;
    for(let newIndex = this.length - 1; newIndex > index; newIndex--)
      this.data[newIndex] = this.data[newIndex-1];
    this.data[index] = value;
  }

  deleteAt(index){
    if(index >= this.length)
      throw new Error('Invalid Index');

    // Need to shift all element greater than index to one position left 
    // and delete last element;

    const value = this.data[index];
    for(let newIndex = index; newIndex < this.length - 1; newIndex++)
      this.data[newIndex] = this.data[newIndex + 1]
    delete this.data[this.length - 1];
    this.length--;
    return value;
  }

  getElementAtIndex(index){
    return this.data[index];
  }
}