const LinkedList = require("./LinkedList/linkedList")

const newList=new LinkedList();
newList.insert(3);
newList.insert(2);
newList.insert(1);
console.log(newList.deleteMiddle());