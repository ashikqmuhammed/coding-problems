function flattenArray<T>(arr: (T | T[])[]): T[] {
    const result: T[] = [];
    
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }
    
    return result;
}

const nestedArray = [1, 2, 3, [1, 2, [1, 2], {}], {}];
const flattened = flattenArray(nestedArray);
console.log(flattened);