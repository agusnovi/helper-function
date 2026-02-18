export function fibonacciWhile(num: number) {
    const results: number[] = []
    let sum: number = 0

    if (num <= 0) return { results, sum }
    if (num === 1) return { results: [0], sum: 0 }
    if (num === 2) return { results: [0, 1], sum: 1 }

    while (results.length < num) {
        if (results.length === 0) {
            results.push(0)
            sum = sum + 0
        }
        else if (results.length === 1) {
            results.push(1)
            sum = sum + 1
        }
        else {
            const nextNum = results[results.length - 1] + results[results.length - 2]
            results.push(nextNum)
            sum = sum + nextNum
        }
    }

    return {
        results,
        sum
    }
}

export function fibonacciFor(num: number) {
    const results = [0, 1]
    for (let i = 0; results.length < num; i++) {
      results.push(results[results.length - 1] + results[results.length - 2]);
    }

    return results
}

export function fibonacciRecursion(n: number): number[] {
    if (n <= 2) return [0, 1]
    else {
        const arr = fibonacciRecursion(n - 1)
        arr.push(arr[arr.length-1] + arr[arr.length-2])
        return arr.slice(0, n)
    }
}

export function isFibonacci(num: number) {
    let first = 0
    let second = 1
    if (num === 0 || num === 1) return true
    
    let temp = first + second

    while (temp <= num) {
        if (temp === num) return true
        first = second
        second = temp
        temp = first + second
    }

    return false
}

export function getFibonacciByNumber(num: number) {
    let first = 0
    let second = 1
    let temp = first + second

    if (num < 0) {
        return {
            value: 0,
            valueAfter: 1
        }
    }

    if (num === 0 || num === 1) {
        return {
            value: num,
            valueAfter: 1
        }
    }

    while (temp <= num) {
        if (temp === num) {
            return {
                value: temp,
                valueAfter: temp + second
            }
        }

        first = second
        second = temp
        temp = first + second
    }

    return {
        value: second,
        valueAfter: temp
    }
}

export function generateFibonacci(start: number, length: number) {
    const { value, valueAfter } = getFibonacciByNumber(start)

    const results = [value, valueAfter]

    while (results.length < length) {
        results.push(results[results.length-1] + results[results.length-2])
    }

    return results
}

export function getAfterFibonacci(num: number) {
    let first = 0
    let second = 1
    let temp = first + second
    while (temp <= num) {
        first = second
        second = temp
        temp = first + second
    }

    return temp;
}

export function getBeforeFibonacci(num: number) {
    let first = 0
    let second = 1
    let temp = first + second
    while (temp < num) {
        first = second
        second = temp
        temp = first + second
    }

    return second
}

export function reverseFibonacci(num: number) {
    let arr: number[] = [1, 0]

    while (arr.length < num) {
        const temp = arr[0] + arr[1]
        arr = [temp].concat(arr)
    }

    return arr
}

export function getIndexFibonacci(num: number) {
    let first = 0
    let second = 1
    let temp = first + second
    let index = 2

    if(num === 0 || num === 1) return num

    while (temp <= num) {
        if(temp === num) return index
        first = second
        second = temp
        temp = first + second
        index++
    }

    return -1
}