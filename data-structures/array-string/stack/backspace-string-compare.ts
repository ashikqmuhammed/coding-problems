function backspaceCompare(s: string, t: string): boolean {
    const process = (str: string): string => {
        const stack: string[] = [];
        for (const char of str) {
            if (char === "#") stack.pop();
            else stack.push(char);
        }
        return stack.join("");
    };
    return process(s) === process(t);
}