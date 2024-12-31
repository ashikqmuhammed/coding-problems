public class SumOfDigits{
    public static int sumOfDigits(int n){
        if(n<10){
            return n;
        }
        int modulus=n%10;
        int removedLastOne=n/10;
        return modulus +sumOfDigits(removedLastOne);
    }
    public static void main(String[] args){
        System.out.println(sumOfDigits(12346));
    }
}
