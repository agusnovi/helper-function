import { json } from "stream/consumers";

class node {
  value: null | number = null;
  left: null | node = null;
  right: null | node = null;
    
  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class bst {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  root: node | null;
  height: number;
  constructor() {
    this.root = null;
    this.height = 0;
  }

  insert(num: number) {
    const newNode = new node(num);

    if (this.root === null) {
      this.root = newNode;
      this.height++;
      return this;
    }

    let current = this.root;
    while (true) {
      if (num <= (current.value ?? 0)) {
        if (current.left === null) {
          current.left = newNode;
          if (current.right === null) {
            this.height++;
          }

          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          if (current.left === null) {
            this.height++;
          }
          return this;
        }
        current = current.right;
      }
    }
  }

  inserting(root: node, newNode: node) {
    if (!newNode.value || !root.value) return root;

    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
        if (root.right === null) {
          this.height++;
        }
        return root;
      }
      this.inserting(root.left, newNode);
    } else {
      if (root.right === null) {
        root.right = newNode;
        if (root.left === null) {
          this.height++;
        }
        return root;
      }
      this.inserting(root.right, newNode);
    }
  }

  insertNewVersion(num: number) {
    const newNode = new node(num);
    if (this.root === null) {
      this.root = newNode;
      this.height++;
      return this;
    } else {
      this.inserting(this.root, newNode);
    }
  }

  inorderNode(node: node) {
    while (!!node.right && !!node.left) {
      return node.left;
    }
    return node.right;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteNode(root: any, num: number) {
    if (!root || !root.value) return null;

    if (root.value === num) {
      if (!root.left && !root.left) return null;
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      const minimunNode = this.inorderNode(root);
      root.value = minimunNode?.value ?? 0;
      root = this.deleteNode(this.root?.right, minimunNode?.value ?? 0);
    } else if (root.value > num) {
      root.left = this.deleteNode(root.left, num);
    } else {
      root.right = this.deleteNode(root.right, num);
    }

    return root;
  }

  removeBst(num: number) {
    this.root = this.deleteNode(this.root, num);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchBst(root: any, num: number): boolean {
    if (!root || !root.value) return false;

    if (root.value === num) return true;

    if (root.value > num) {
      return this.searchBst(root.left, num);
    }

    return this.searchBst(root.right, num);
  }

  findNode(num: number) {
    if (this.root === null) return false;
    return this.searchBst(this.root, num);
  }

  findNodeLoop(num: number) {
    if (!this.root) return false;

    let current: node | null = this.root;

    while (current && current.value) {
      if (current.value === num) return true;
      else if (current.value > num) {
        current = current.left;
      } else if (current.value < num) {
        current = current.right;
      }
    }

    return false;
  }

  //===========================

  breadthFirstTraversal() {
    const queue = [
      {
        label: 'root',
        value: this.root,
      },
    ];
    const output = [];
    while (queue.length) {
      let size = queue.length;
      const arrayLevel = [];
      while (size) {
        const node = queue.shift();
        arrayLevel.push(node);
        node?.value?.left &&
          queue.push({ label: 'left', value: node?.value.left });
        node?.value?.right &&
          queue.push({ label: 'right', value: node?.value.right });
        size--;
      }
      output.push(arrayLevel);
    }
    return output;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prereOrder(root: any, queue: number[]) {
    if (root === null) return;
    else {
      queue.push(root.value);
      root.left && this.prereOrder(root.left, queue);
      root.right && this.prereOrder(root.right, queue);
    }
  }

  depthFirstTraversalPreOrder() {
    const queue: number[] = [];
    this.prereOrder(this.root, queue);
    return queue
    //      3
    //    /   \
    //  1     22222
    //        /
    //        8
    //      /
    //    5
    //     \
    //       5
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inorder(root: any, queue: number[]) {
    if (!root) return 
    else {
      root.left && this.inorder(root.left, queue)
      queue.push(root.value)
      root.right && this.inorder(root.right, queue)
    }
  }

  depthFirstTraversalInorder() {
    const queue: number[] = []
    this.inorder(this.root, queue)
    return queue
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postorder(root: any, queue: number[]) {
    if (!root) return
    else {
      root.left && this.postorder(root.left, queue)
      root.right && this.postorder(root.right, queue)
      queue.push(root.value)
    }
  }

  depthFirstTraversalPostorder() {
    const queue: number[] = []
    this.postorder(this.root, queue);
    return queue
  }

  display() {
    return JSON.stringify(this.root, null, 2);
  }

  displayHeight() {
    return this.height;
  }
}