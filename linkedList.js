class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  insertAtIndex(index, data){
    if (index==0) return this.insertAtHead(data);
    let prev = this.getByIndex(index-1);
    if (prev==null) return null;
    prev.next = new LinkedListNode(data, prev.next);
    this.length++;
  }

  removeHead(){
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index){
    let curr = this.getByIndex(index);
    if(curr==null) return null;
    let prev = this.getByIndex(index-1);
    prev.next = curr.next;
    this.length--;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  print(){
    let output = '';
    let data = this.head;
    for (let i = 0; i < this.length; i++) {
      output = output + `${data.value} -> `;
      data = data.next;
    }
    output = output + `null`;
    console.log({output});
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.formValues = (...values) => {
  const ll = new LinkedList();
  for (let i = values.length-1; i >=0 ; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
