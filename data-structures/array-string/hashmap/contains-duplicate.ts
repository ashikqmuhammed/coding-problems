function containsDuplicate(nums: number[]): boolean {
    const seen: Record<number, boolean> = {};
    for (const num of nums) {
        if (num in seen) return true;
        seen[num] = true;
    }
    return false;
}