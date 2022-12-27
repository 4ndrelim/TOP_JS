import Node from "./Node.js";

const LinkedList = () => {
    let HEAD = null;
    let length = 0;

    const append = (value) => {
        const newNode = Node(value);
        length++;
        if (HEAD == null) {
            return (HEAD = newNode);
        }
        let pointer = HEAD;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode;
        }
        pointer.nextNode = newNode;
    };

    const head = () => {
        if (!HEAD) return null;
        return HEAD.value;
    };

    const prepend = (value) => {
        const newNode = Node(value);
        length++;
        if (HEAD == null) {
            return (HEAD = newNode);
        }
        newNode.nextNode = HEAD;
        HEAD = newNode;
    };

    const size = () => {
        if (!HEAD) {
            return 0;
        }
        return length;
    };

    const tail = () => {
        if (!HEAD) return null;
        let pointer = HEAD;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode;
        }
        return pointer.value;
    };

    const at = (index) => {
        if (!HEAD) return null;
        let pointer = HEAD;
        for (let i = 0; i < index; i++) {
            pointer = pointer.nextNode;
        }
        return pointer;
    };

    

    return {
        append,
        head,
        prepend,
        size,
        tail,
        at,
    };
};

export default LinkedList;