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
} from '@/lib/helperFibonacci';

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
  const res10 = getIndexFibonacci(1)

  // console.log(res1, res10);

  return <h1>hello world</h1>;
}
