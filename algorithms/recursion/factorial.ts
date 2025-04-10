function factorial(n: number): number {
    return n === 0 ? 1 : n * factorial(n - 1);
}

const num = 4;
console.log(`Factorial of ${num} is ${factorial(num)}`);