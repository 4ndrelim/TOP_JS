
import LinkedList from "./LinkedList.js";

const list = LinkedList();
console.log(list.size());
list.append("node1");
console.log(list.head());
list.prepend("node0");
console.log(list.head());
list.append("node2");
console.log(list.tail());
console.log(list.at(1));

const list2 = LinkedList();
list2.prepend("nodePOP");
console.log(list2.pop());
console.log(list2.size());

console.log(list.toString());
console.log(list.find("node2"));

console.log("last try");
const list3 = LinkedList();
list3.append("node100");
list3.append("node200");
list3.prepend("node300");
console.log(list3.toString());
list3.insertAt("node150", 2);
console.log(list3.removeAt(0));
console.log(list3.toString());