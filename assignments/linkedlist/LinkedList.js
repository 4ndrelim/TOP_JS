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

    const contains = (value) => {
        if (!HEAD) return null;
        let pointer = HEAD;
        while (pointer !== null) {
            if (pointer.value === value) {
                return true;
            }
            pointer = pointer.nextNode;
        }
        return false;
    }

    const find = (value) => {
        if (!HEAD) return null;
        let index = 0;
        let pointer = HEAD;
        while (pointer !== null) {
            if (pointer.value === value) {
                return index;
            }
            index++;
            pointer = pointer.nextNode;
        }
        return -1;
    }

    const toString = () => {
        if (!HEAD) return null;
        let pointer = HEAD;
        let result = "";
        while (pointer !== null) {
            result = result.concat(`( ${pointer.value} ) --> `);
            pointer = pointer.nextNode;
        }
        result = result.concat('null');
        return result;
    }
    
    const insertAt = (value, index) => {
        const newNode = Node(value);
        length++;
        let pointer = HEAD;
        if (index === 0) {
            HEAD = newNode;
            HEAD.nextNode = pointer;
            return;
        }
        for (let i = 0; i < index-1; i++) {
            pointer = pointer.nextNode;
        }
        const nextNode = pointer.nextNode;
        pointer.nextNode = newNode;
        newNode.nextNode = nextNode;
    }

    const removeAt = (index) => {
        if (index < 0 || index >= length) {
            return null;
        }
        let ret = null;
        if (index === 0) {
            ret = HEAD;
            HEAD = HEAD.nextNode;
        } else {
            const pre = at(index-1);
            ret = pre.nextNode;
            pre.nextNode = pre.nextNode.nextNode;
        }
        length--;
        return ret;;
    }

    return {
        append,
        head,
        prepend,
        size,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    };
};

export default LinkedList;