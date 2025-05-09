function fibonacci(n: number): number {
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 2) + fibonacci(n - 1);
}

const num = 6;
console.log(`${num}th fibonacci number is ${fibonacci(num)}`);