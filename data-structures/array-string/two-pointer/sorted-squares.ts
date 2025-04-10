function sortedSquares(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n);
    let left = 0;
    let right = n - 1;
    
    for (let i = n - 1; i >= 0; i--) {
        const leftSquare = nums[left] ** 2;
        const rightSquare = nums[right] ** 2;
        
        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            left++;
        } else {
            result[i] = rightSquare;
            right--;
        }
    }
    
    return result;
}