public class FindMissingNumber {
    public static int findMissingNumber(int[] nums){
        int n=nums.length;
        int nSum=n*(n+1)/2;
        int numSum=0;
             // Calculate the sum of the elements in the array
             for (int num : nums) {
                numSum += num;
            }
    
        return nSum-numSum;
    }
    public static void main(String[] args){
        int[] nums={1,3,4,0};
        System.out.println(findMissingNumber(nums));
    }
}
