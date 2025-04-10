/**
 * Performs binary search on a sorted array
 * @param arr - Sorted array of numbers
 * @param target - Value to search for
 * @returns Index of target if found, otherwise -1
 */
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }

    return -1; // Target not found
}

// Example Usage
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue = 23;

const result = binarySearch(sortedArray, targetValue);
console.log(result); // Output: 5 (index of 23)