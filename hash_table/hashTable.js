class Node{
  constructor(key, value){
    this.key = key,
    this.value = value;
    this.next = null;
  }
}

class HashTable{
  constructor(){
    this.array = new Array(10).fill(null);
  }

  put(obj){
    let node = new Node(obj.key, obj.value);
    let index = this.hash(obj.key);
    this.performChaining(node, index);
    return;
  }

  delete(key){
    let index = this.hash(key);
    let node = this.array[index];
    if(!node)
      return "key not present";
    if(node.next === null && node.key === key){
      this.array[index] = null;
      return;
    }
    if(node.key === key){
      this.array[index] = node.next;
      node.next = null;
      return node;
    }
    let prev = node;
    node = node.next;
    while(node !== null){
      if(node.key === key){
        prev.next = node.next;
        node.next = null;
        return node;
      }
      node = node.next;
    }
    console.log('Key not present');
  }

  search(key){
    let index = this.hash(key);
    let node = this.array[index];
    if(!node){
      console.log('Key not found');
      return;
    }
    while(node !== null){
      if(node.key === key){
        let tempNode = Object.assign({}, node);
        console.log(tempNode);
        delete tempNode.next;
        return tempNode;
      }
      node = node.next;
    }
    console.log('Key not found');
  }

  hash(key){
    return key % 10;
  }

  performChaining(obj, index){
    if(this.array[index] === null){
      this.array[index] = obj;
      return;
    }
    let node = this.array[index];
    while(node.next !== null){
      if(node.key === obj.key){
        node = obj;
        return;
      }
      node = node.next;
    }
    if(node.key === obj.key){
      node = obj;
      return;
    }
    node.next = obj;
    return;
  }

  print(){
    for(let [index, item] of this.array.entries()){
      let printString = '';
      while(item !== null){
        printString += item.key + ":" + item.value;
        if(item.next !== null)
          printString += '->';
        item = item.next;
      }
      if(!printString)
        printString = null;
      console.log(index , printString);
    }
  }
}