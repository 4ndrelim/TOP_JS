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

    return {
        append,
        head
    };
};

export default LinkedList;