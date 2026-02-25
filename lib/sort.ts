export function sort(left: string[], right: string[]) {
  const results = [];
  let leftIndex = 0;
  let rightIndex = 0;
    
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      results.push(left[leftIndex]);
      leftIndex++;
    } else {
      results.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export function mergeSort(arr: string[]): string[] {
    if (arr.length === 1) return arr
    const middle = Math.floor(arr.length) / 2
    
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle))

    return sort(left, right)
}

export function partition(arr: number[], start: number, end: number): number {
  const pivot = arr[start];
  let pivotIndex = start;
  
  let index = start + 1;
    // [3, 1, 5, 3, 444, 2, 10, 985, 56, 77, 3]

  while (index <= end) {
    if (arr[index] <= pivot) {
      pivotIndex++;

      if (index !== pivotIndex) {
        [arr[pivotIndex], arr[index]] = [arr[index], arr[pivotIndex]];
      }
    }

    index++;
  }
    if (pivotIndex !== start) {
      [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    }

  return pivotIndex;
}

export function quickSort(arr: number[], start: number, end: number) {
  
    if (start >= end) return;
    const pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex -1);
    quickSort(arr, pivotIndex + 1, end);
    
}

export function bubbleSort(arr: number[], end: number) {
    // let start = 0

    // if (start >= end) return arr;
    
    // while (start < end) {
    //   if (arr[start] > arr[start + 1]) {
    //     [arr[start], arr[start + 1]] = [arr[start + 1], arr[start]];
    //   }
    //   start++;
    // }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    // o(n) + o(n^2)
    // bubbleSort(arr, end - 1)
}

//====================

function comparationSwap(left: number[], right: number[]) {
  const results = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  return [...results, ...left, ...right]
}

export function mergeSortTrue(arr: number[]) {
  if (arr.length <= 1) return arr
  
  const middle = Math.floor(arr.length / 2)
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const left: any = mergeSortTrue(arr.slice(0, middle));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const right: any = mergeSortTrue(arr.slice(middle));

  return comparationSwap(left, right)
}

function partitionTrue(start: number, end: number, arr: number[]) {
  const pivot = arr[start]
  let swapIndex = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      if (swapIndex !== i) {
        [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
      }
    }
  }

  if (swapIndex !== start) {
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
  }

  return swapIndex
}

export function quickSortTrue(arr: number[], start: number, end: number) {
  if (start >= end) return;

  const swapIndex = partitionTrue(start, end, arr);
  // [3, 2, 4, 9, 1, 0, 8, 7]
  // [3, 2, 4, 9, 1, 0, 8, 7]
  // [3, 2, 1, 9, 4, 0, 8, 7]
  // [3, 2, 1, 0, 4, 9, 8, 7]
  // [0, 2, 1, 3, 4, 9, 8, 7]
  // [0, 2, 1] 3 [4, 9, 8, 7]
  // [0, 2, 1] = 0, 2
  // 0 [2, 1] => swapIndex = 0; left = 0, -1(stop); right = 1, 2
  // 0 [1, 2] => swapIndex = 1; left = 1, 0; right = 2, 2

  quickSortTrue(arr, start, swapIndex - 1);
  quickSortTrue(arr, swapIndex + 1, end);
  return arr;
}

export function bubbleSortTrue(arr: number[]) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < (arr.length - 1 - j); i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
}

export function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
}

//====================
