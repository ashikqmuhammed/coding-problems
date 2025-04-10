function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: Record<string, string> = { '(': ')', '{': '}', '[': ']' };

    for (const char of s) {
        if (char in pairs) {
            stack.push(char); // Push opening brackets
        } else {
            const last = stack.pop();
            if (pairs[last!] !== char) return false; // Mismatch
        }
    }

    return stack.length === 0; // Stack must be empty
}