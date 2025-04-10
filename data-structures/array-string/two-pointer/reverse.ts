function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap
        start++;
        end--;
    }
}