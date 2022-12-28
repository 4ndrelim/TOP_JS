class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    };
}

class Tree {
    constructor(array) {
        // remove duplicates
        this.array = [...new Set(array)].sort((a,b) => a-b);
        console.log(this.array);
        this.root = this.buildTree(0, this.array.length-1);
    };

    buildTree(start, end) {
        
        if (start > end) {
            return null;
        }
        let mid = Math.floor((start + end)/2);
        let root = new Node(this.array[mid]);

        root.left = this.buildTree(start, mid-1);
        root.right = this.buildTree(mid+1, end);

        return root;
    };

    #insert(value, node) {
        if (node === null) {
            return new Node(value);
        }
        if (node.data > value) {
            node.left = this.#insert(value, node.left);
        } else {
            node.right = this.#insert(value, node.right)
        }
        return node
    }

    insert(value) {
        if (this.root == null) {
            this.root = new Node(value);
        } 
        this.#insert(value, this.root);
    };

    find(value) {
        this.#find(value, this.root);
    };

    #find(value, node) {
        if (node === null) {
            return false;
        }
        if (node.data > value) {
            return this.find(value, root.left);
        } else if (node.data < value) {
            return this.find(value, root.right);
        } else {
            return node;
        }
    }

    levelOrder() {
        const queue = [];
        const ret = [];
        if (this.root !== null) {
            queue.push(this.root);
        }
        while (queue.length > 0) {
            let current = queue.shift();
            ret.push(current.data);
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }
        return ret;
    };

    preOrder() {
        const stack = [];
        const ret = [];
        if (this.root !== null) {
            stack.push(this.root);
        }
        while (stack.length > 0) {
            let current = stack.pop();
            ret.push(current.data);
            if (current.right !== null) stack.push(current.right);
            if (current.left !== null) stack.push(current.left);
        }
        return ret;
    };

    inOrder(root) {};

    postOrder(root) {};

    height(root) {};

    depth(node, root = this.root) {};

    delete(value, root = this.root) {};

    #prettyPrint(node, prefix = '', isLeft = true) {
        if (node.right !== null) {
            this.#prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
          }
          console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
          if (node.left !== null) {
            this.#prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
          }
    };

    prettyPrint() {
        this.#prettyPrint(this.root);
    }
}

tree = new Tree([4,7,3,2,1,2,6,0,10]);
tree.prettyPrint();
tree.insert(8);
tree.prettyPrint();
console.log(tree.levelOrder());
console.log(tree.preOrder());

