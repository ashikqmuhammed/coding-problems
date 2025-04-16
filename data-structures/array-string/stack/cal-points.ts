function calPoints(operations: string[]): number {
    const stack: number[] = [];
    
    for (const op of operations) {
        if (op === 'C') {
            stack.pop(); // Remove the last score
        } else if (op === 'D') {
            stack.push(stack[stack.length - 1] * 2); // Double the last score
        } else if (op === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]); // Sum of last two scores
        } else {
            stack.push(Number(op)); // Add new score
        }
    }
    
    return stack.reduce((sum, score) => sum + score, 0);
}