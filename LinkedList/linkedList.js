const Node = require("./node")

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length=0;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.head) {
          this.head = node;
          this.length++;
        } else if(!this.tail){
            this.tail = this.head;
            node.next = this.head;
            this.head = node;
            this.length++;
        } else {
          node.next = this.head;
          this.head = node;
          this.length++;
        }
      }

      append(value) {
        const newNode = new Node(value);
        this.length++;
        if (!this.head) {
          this.head = newNode;
          return this;
        }
        if (!this.head.next) {
          this.head.next = newNode;
        }
        if (this.tail) {
          this.tail.next = newNode;
        }
        this.tail = newNode;
    
        return this;
      }
}
module.exports = LinkedList
