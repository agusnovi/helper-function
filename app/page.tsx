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
} from '@/lib/sort';
import { bst } from "@/lib/bst"

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

  // const sorted1 = mergeSort(["sdsd", "aa", "er", "f", "h", "q", "sr"])
  const arr = [3, 2, 4, 9, 1, 0, 8, 7]
  // quickSort(arr, 0, arr.length -1)
  // bubbleSort(arr, arr.length -1)
  // selectionSort(arr)
  // bubbleSortTrue(arr);
  quickSortTrue(arr, 0, arr.length -1)
  console.log(arr)

  const bs = new bst()
  // bs.insert(3)
  // bs.insert(1)
  // bs.insert(22222)
  // bs.insert(8)
  // bs.insert(5)
  // bs.insert(5)
  bs.insertNewVersion(3)
  bs.insertNewVersion(1)
  bs.insertNewVersion(22222);
  bs.insertNewVersion(8)
  bs.insertNewVersion(5)
  bs.insertNewVersion(5)
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
  return <h1>hello world</h1>;
}
