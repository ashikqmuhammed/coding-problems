function maxSubarray(arr: number[], k: number): number {
    let maxSum = 0;
    let windowSum = 0;
    
    // Calculate first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];  // Subtract left, add right
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Usage
console.log(maxSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9