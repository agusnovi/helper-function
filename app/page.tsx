import {
  fibonacciWhile,
  isFibonacci,
  fibonacciFor,
  getFibonacciByNumber,
  generateFibonacci,
  fibonacciRecursion,
  getAfterFibonacci,
  getBeforeFibonacci,
  reverseFibonacci,
  getIndexFibonacci,
  recrusion,
  getNumberByIndex,
} from '@/lib/fibonacci';

import {
  mergeSort,
  quickSort,
  bubbleSort,
  selectionSort,
  bubbleSortTrue,
  quickSortTrue,
  mergeSortTrue,
} from '@/lib/sort';

import { bst } from "@/lib/bst"
import { binarySearchTree } from "@/lib/binary-search"

export default function Home() {
  // const res1 = fibonacciWhile(15);
  // const res2 = isFibonacci(611);
  // const res3 = getFibonacciByNumber(20);
  // const res4 = generateFibonacci(70, 6)
  // const res5 = fibonacciFor(9)
  // const res6 = fibonacciRecursion(10)
  // const res7 = getAfterFibonacci(2)
  // const res8 = getBeforeFibonacci(14)
  // const res9 = reverseFibonacci(10);
  // const res10 = getIndexFibonacci(1)
  // const res11 = recrusion(10)
  // const res12 = getNumberByIndex(18);
  // console.log(res1, res12);
  // =======================================
  // const sorted1 = mergeSort(["sdsd", "aa", "er", "f", "h", "q", "sr"])
  // const arr = [3, 2, 4, 9, 1, 0, 8, 7]
  // quickSort(arr, 0, arr.length -1)
  // bubbleSort(arr, arr.length -1)
  // selectionSort(arr)
  // bubbleSortTrue(arr);
  // quickSortTrue(arr, 0, arr.length -1)
  // const res = mergeSortTrue(arr)
  // console.log(res)
  // =======================================
  // const bs = new bst()
  // bs.insert(3)
  // bs.insert(1)
  // bs.insert(22222)
  // bs.insert(8)
  // bs.insert(5)
  // bs.insert(5)
  // bs.insertNewVersion(3)
  // bs.insertNewVersion(1)
  // bs.insertNewVersion(22222);
  // bs.insertNewVersion(8)
  // bs.insertNewVersion(5)
  // bs.insertNewVersion(5)
  // console.log(bs.depthFirstTraversalPreOrder());
  // console.log(bs.depthFirstTraversalInorder());
  // console.log(bs.depthFirstTraversalPostorder());
  // console.log(bs.breadthFirstTraversal())
  // bs.removeBst(22222);
  // console.log(bs.findNodeLoop(5));
  // console.log(bs.display())
  // console.log(bs.displayHeight())
  // 3
  // /\
  // 1 22222
  //   /
  //   8
  //   /
  //   5
  //   /
  //   5
  // =======================================
  
  const binarySearch = new binarySearchTree()
  binarySearch.insertNewNode(4)
  binarySearch.insertNewNode(40);
  binarySearch.insertNewNode(14);
  binarySearch.insertNewNode(3);
  binarySearch.insertNewNode(6);
  binarySearch.insertNewNode(0);
  binarySearch.insertNewNode(1);
  binarySearch.insertNewNode(-1);
  //       4
  //      / \
  //     3   40
  //    /    /
  //   0    14
  //  / \   /
  // -1 1  6
  // console.log(binarySearch.displayJson());
  // console.log(binarySearch.breadthFirstTraversal());
  return <h1>hello world</h1>;
}
