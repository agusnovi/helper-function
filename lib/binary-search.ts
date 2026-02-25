class node {
    value: number
    left: node | null
    right: node | null
    constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
    }
}

export class binarySearchTree {
  root: node | null;
  constructor() {
    this.root = null;
  }

  insertRecursive(root: node | null, newNode: node) {
    if (!root) {
      root = newNode;
      return root;
    }

    if (newNode.value < root.value) {
      root.left = this.insertRecursive(root.left, newNode);
    } else {
      root.right = this.insertRecursive(root.right, newNode);
    }

    return root;
  }

  insertNewNode(value: number) {
    const newNode = new node(value);
    this.root = this.insertRecursive(this.root, newNode);

    // if (!this.root) {
    //   this.root = newNode;
    //   return this;
    // }
    // let current = this.root;
    // while (true) {
    //   if (newNode.value < current.value) {
    //     if (!current.left) {
    //       current.left = newNode;
    //       return this;
    //     }
    //     current = current?.left;
    //   } else {
    //     if (!current.right) {
    //       current.right = newNode;
    //       return this;
    //     }
    //     current = current?.right;
    //   }
    // }
  }

  // ======================================================================
  breadthFirst(root: node | null, output: { values: number[]; sum: number }[]) {
    if (!root) return;

    const queue: node[] = [root];

    while (queue.length) {
      let size = queue.length;
      const horizontalLevel: number[] = [];
      let sum = 0;

      while (size) {
        const temp = queue.shift();
        sum = sum + (temp?.value ?? 0);
        horizontalLevel.push(temp?.value ?? 0);
        temp?.left && queue.push(temp.left);
        temp?.right && queue.push(temp.right);
        size--;
      }
      output.push({
        values: horizontalLevel,
        sum,
      });
    }
  }

  breadthFirstTraversal() {
    const output: { values: number[]; sum: number }[] = [];

    this.breadthFirst(this.root, output);
    return output;
  }

  // ======================================================================

  

  displayJson() {
    return JSON.stringify(this.root, null, 2);
  }
}