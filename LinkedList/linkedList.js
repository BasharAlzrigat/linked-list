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

      deleteMiddle(){
        let length = this.length - 1
        let currentNode;
        let nextNode = this.head.next
        let oldNode;
        if (this.length === 1) {
            return "exeption"
        }
        if(this.length === 2){
            this.head.next  = null
            this.tail = null
            this.length--;
            return this
        }
        if ( this.length === 3) {
            this.head.next = this.tail
            this.length--;
            return this
        }
        if(this.length % 2 !== 0 ){
            length = length/2
        }else {length = Math.ceil(length/2)}
            for (let i = 0; i < length; i++) {
                if(!currentNode) {
                    currentNode = this.head
                }else{
                    oldNode = currentNode;
                    currentNode = nextNode
                    nextNode = nextNode.next
                } 
            }
            currentNode.next = nextNode 
            this.length--;
            return this
      }

      insertAfter(value, newValue) {
        let nodePosition = this.head;
        while (nodePosition.value !== value) {
          if (!nodePosition.next) {
            if (nodePosition.value === value) {
              break;
            } else {
              return 'The number is not in the node';
            }
          }
          nodePosition = nodePosition.next;
        }
        let newNode = new Node(newValue);
        if (!nodePosition.next) {
          nodePosition.next = newNode;
          this.tail = newNode;
        } else {
          let nextNode = nodePosition.next;
          nodePosition.next = newNode;
          newNode.next = nextNode;
        }
      }
    
      insertBefore(value, newValue) {
        let nodePosition = this.head;
        let saveNodeBefore = this.head;
        while (nodePosition.value !== value) {
          if (!nodePosition.next) {
            if (nodePosition.value === value) {
              break;
            } else {
              return 'The number is not in the node';
            }
          }
          saveNodeBefore = nodePosition;
          nodePosition = nodePosition.next;
        }
        let newNode = new Node(newValue);
        if (saveNodeBefore === nodePosition) {
          saveNodeBefore = newNode;
          newNode.next = nodePosition;
          this.head = newNode;
        } else {
          saveNodeBefore.next = newNode;
          newNode.next = nodePosition;
        }
      }
}
module.exports = LinkedList
