// 1=n/2^k
// k=log2n

class BinarySearch {
    public static void main(String[] args) {
        int[] arr = {7, 5, 2, 1};
        System.out.println(binarySearch(arr, 1)); // Should print 3
    }

    public static int binarySearch(int[] arr, int target) {
        int first = 0;
        int last = arr.length - 1;

        // Determine if the array is sorted in ascending or descending order
        boolean isAscending = arr[first] < arr[last];

        while (first <= last) {
            int mid = first + (last - first) / 2;

            if (arr[mid] == target) {
                return mid;
            }

            if (isAscending) {
                if (target < arr[mid]) {
                    last = mid - 1;
                } else {
                    first = mid + 1;
                }
            } else { // Descending order
                if (target > arr[mid]) {
                    last = mid - 1;
                } else {
                    first = mid + 1;
                }
            }
        }
        return -1;
    }
}
