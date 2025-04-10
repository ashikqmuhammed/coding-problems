function twoSumSorted(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return [left + 1, right + 1]; // 1-indexed
        } else if (sum < target) {
            left++; // Need a larger sum
        } else {
            right--; // Need a smaller sum
        }
    }

    return [];
}