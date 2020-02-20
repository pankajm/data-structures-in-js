class Node{
  constructor(value){
    this.data = value;
    this.next = null;
  }
}


const _reverse = new WeakMap(); // for private method 
class LinkedList{

  constructor(){
    this.head = null;
    this.tail = null;

    // Private function 
    // for Reversing a linked list by recursion
      
    _reverse.set(this, (node) => {
      if(node === null)
        return null;
      if(node.next === null){
        this.tail = this.head;
        this.head = node;
        return node;
      }
      let node1 = _reverse.get(this)(node.next);
      node1.next = node;
      node.next = null;
      return node;
    });
  }

  insertFirst(value){
    let node = new Node(value);
    if(!this.head && !this.tail){
      this.head = node;
      this.tail = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  insertLast(value){
    let node = new Node(value);
    if(!this.head && !this.tail){
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  deleteFirst(){
    if(this.tail === this.head){
      this.tail = null;
      this.head = null;
      return;
    }
    let tempNode = this.head;
    this.head = this.head.next;
    tempNode.next = null;   
  }

  deleteLast(){
    let tempNode = this.head;
    if(this.tail === this.head){
      this.tail = null;
      this.head = null;
      return;
    }
    while(tempNode.next !== this.tail)
      tempNode = tempNode.next;
    tempNode.next = null;
    this.tail = tempNode;  
  }

  print(){
    if(this.head === null && this.tail === null){
      console.log('No nodes in the list');
      return;
    }
    let tempNode = this.head;
    let string = '';
    while(tempNode !== null){
      string = string + tempNode.data;
      if(tempNode.next !== null)
        string = string + '->'
      tempNode = tempNode.next;
    }
    console.log(string);
  }

  contains(value){
    let tempNode = this.head;
    while(tempNode !== null){
      if(tempNode.data === value)
        return true;
      tempNode = tempNode.next;
    }
    return false;
  }

  indexOf(value){
    let index = 0;
    let tempNode = this.head;
    while(tempNode !== null){
      if(tempNode.data === value)
        return index;
      index++;
      tempNode = tempNode.next;
    } 
  }
  
  insertAtPosition(value, pos){
    let node = new Node(value);
    if(pos === 1){
      if(this.head === null && this.tail === null)
        this.tail = node;
      node.next = this.head;
      this.head = node;
      return;
    }
    let tempNode = this.head;
    for(let currentPos = 1; currentPos < pos - 1; currentPos++)
      tempNode = tempNode.next;
    node.next = tempNode.next;
    tempNode.next = node;
    if(node.next === null)
      this.tail = node;
  }

  deleteAtPosition(pos){
    let tempNode = this.head; 
    if(pos === 1){
      if(this.head === this.tail){
        this.head = null;
        this.tail = null;
        return;
      }
      this.head = this.head.next;
      tempNode.next = null;
      return;
    }
    let prevNode = this.head;
    for(let currentPos = 1; currentPos < pos; currentPos++){
      prevNode = tempNode;
      tempNode = tempNode.next;
    }
    prevNode.next = tempNode.next;
    tempNode.next = null;
    if(prevNode.next === null)
      this.tail = prevNode;
  }

  /* Exercises on linked list */

  /* 1.Reverse a Linked List...time and space o(n) */ 

  reverse(){
    const nodeArray = [];
    let tempNode = this.head;
    let size = 0;
    while(tempNode != null)
    {
      nodeArray.push(tempNode);
      tempNode = tempNode.next;
      size++;
    }

    // changing tail and head

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    // changing other links

    for(let i = size - 1; i > 0; i--)
      nodeArray[i].next = nodeArray[i-1]
    
    nodeArray[0].next = null;
  }


  reverseByRecursion(){
    _reverse.get(this)(this.head);
  }

  getKthFromTheEnd(k){
    let p = this.head;
    let q = this.head;
    if(k === 0)
      return;
    for(let i = 0; i < k; i++){
      q = q.next;
      if(q === null)
        throw new Error(`Linked list have less than ${k} nodes`);
    }
    while(q !== null){
      p = p.next;
      q = q.next;
    }
    return p.data;
  } 
}

console.log('*** LinkedList Class ***');
console.log('Methods Available - ');
console.log('1.insertFirst - ');
console.log('2.insertLast - ');
console.log('3.deleteFirst - ');
console.log('4.deleteLast - ');
console.log('5.insertAtPosition - ');
console.log('6.deleteAtPosition - ');
console.log('7.contains - ');
console.log('8.indexOf - ');
console.log('9.reverse - ');
console.log('10.reverseByRecursion - ' );
console.log('11.print - ');






