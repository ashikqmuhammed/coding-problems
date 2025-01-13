public class Fibonacci {
    public static int fibonacci(int n){
        if(n==0){
            return 0;
        }
        if(n==1||n==2){
            return 1;
        }
        return fibonacci(n-2)+fibonacci(n-1);
    }
    public static void main(String[] args){
        int num=6;
        System.out.println(num+"th fibonacci number is "+fibonacci(num));
    }
    
}