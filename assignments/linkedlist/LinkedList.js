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
        let i = 0;
        while (pointer !== null && i < index) {
            pointer = pointer.nextNode;
            i++;
        }
        return pointer;
    };

    const pop = () => {
        if (HEAD === null) {
            return null;
        }
        if (HEAD.nextNode === null) {
            let tmp = HEAD;
            HEAD = null;
            length--;
            return tmp;
        }
        let pointer = HEAD;
        while (pointer.nextNode.nextNode !== null) {
            pointer = pointer.nextNode;
        }
        let tmp = pointer.nextNode;
        pointer.nextNode = null;
        length--;
        return tmp;
    }
    

    return {
        append,
        head,
        prepend,
        size,
        tail,
        at,
        pop,
    };
};

export default LinkedList;