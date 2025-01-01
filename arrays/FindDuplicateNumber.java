import java.util.HashSet;

public class FindDuplicateNumber {
    public static int findDuplicateNumber(int[] nums) {
        // Use a HashSet to store seen numbers
        HashSet<Integer> seen = new HashSet<>();

        for (int num : nums) {
            // If the number is already in the set, it's the duplicate
            if (seen.contains(num)) {
                return num;
            }
            // Otherwise, add the number to the set
            seen.add(num);
        }

        // If no duplicate is found (shouldn't happen given the problem constraints)
        throw new IllegalArgumentException("No duplicate number found.");
    }

    public static void main(String[] args) {
        int[] nums = {3, 1, 3, 4, 2};
        System.out.println("Duplicate number: " + findDuplicateNumber(nums));
    }
}
