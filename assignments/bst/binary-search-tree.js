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
        this.array = [...new Set(array)].sort();
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
        if (node.value > value) {
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

    traverse(root, array) {};

    find(value, root = this.root) {};

    delete(value, root = this.root) {};

    levelOrder(root) {};

    preOrder(root) {};

    inOrder(root) {};

    postOrder(root) {};

    height(root) {};

    depth(node, root = this.root) {};

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

tree = new Tree([4,7,3,2,1,2]);
tree.prettyPrint();
tree.insert(8);
tree.prettyPrint();

