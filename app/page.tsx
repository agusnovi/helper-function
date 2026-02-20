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

import { mergeSort, quickSort, bubbleSort } from '@/lib/sort';

export default function Home() {
  const res1 = fibonacciWhile(15);
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
  const arr = [3, 1, 5, 3, 444, 2, 10, 985, 56, 77, 3]
  // quickSort(arr, 0, arr.length -1)
  // bubbleSort(arr, arr.length -1)
  console.log(arr)
  return <h1>hello world</h1>;
}
