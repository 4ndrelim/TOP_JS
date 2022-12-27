
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