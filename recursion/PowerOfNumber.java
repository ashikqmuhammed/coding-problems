public class PowerOfNumber {
    public static int powerOfNumber(int num, int power){
        if(num<=0||power<=0 || power==0){
            return 1;
        }
        if(power==1){
            return num;
        }
        return num * powerOfNumber(num,power-1);
    }
    public static void main(String[] args){
        System.out.println(powerOfNumber(0, 0));
    }
}