function twoSum(nums: number[], target: number): number[] {
    const map: Record<number, number> = {}; // { value: index }
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in map) {
            return [map[complement], i];
        }
        map[nums[i]] = i; // Store value and its index
    }
    
    return [];
}