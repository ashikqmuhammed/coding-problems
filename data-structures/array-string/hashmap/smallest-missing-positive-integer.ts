function firstMissingPositive(nums: number[]): number {
    const n = nums.length;
    const seen = new Set<number>(nums);

    for (let i = 1; i <= n + 1; i++) {
        if (!seen.has(i)) return i;
    }

    return 1; // Edge case: empty array
}