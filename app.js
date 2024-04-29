class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.display();
    }
  
    delete(data) {
      if (!this.head) return;
      if (this.head.data === data) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        let prev = null;
        while (current && current.data !== data) {
          prev = current;
          current = current.next;
        }
        if (!current) return; // Element not found
        prev.next = current.next;
      }
      this.display();
    }
  
    search(data) {
      let current = this.head;
      while (current) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
      this.display();
    }
  
    display() {
      const linkedList = document.getElementById('linkedList');
      linkedList.innerHTML = '';
      let current = this.head;
      while (current) {
        const li = document.createElement('li');
        li.textContent = current.data;
        linkedList.appendChild(li);
        current = current.next;
      }
    }
  }
  
  const linkedList = new SinglyLinkedList();
     

  function insert() {
    const value = document.getElementById('value').value;
    if (value !== '') {
      linkedList.insert(value);
      document.getElementById('value').value = '';
    }
  }
  
  function deleteNode() {
    const value = document.getElementById('deleteValue').value;
    if (value !== '') {
      linkedList.delete(value);
      document.getElementById('deleteValue').value = '';
    }
  }
  
  function search() {
    const value = document.getElementById('searchValue').value;
    if (value !== '') {
      const found = linkedList.search(value);
      if (found) {
        alert(`${value} found in the linked list.`);
      } else {
        alert(`${value} not found in the linked list.`);
      }
      document.getElementById('searchValue').value = '';
    }
  }
  
  function reverse() {
    linkedList.reverse();
  }
  