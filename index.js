const LinkedList = require("./LinkedList/linkedList")

const newList=new LinkedList();
newList.insert(3);
newList.insert(2);
newList.insertBefore(2,2.5)
console.log(newList);