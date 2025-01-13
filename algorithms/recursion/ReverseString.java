public class ReverseString{
    public static String reverseString(String str){
    
        int length=str.length();
        if(length<=1){
            return str;
        }
        char firstLetter=str.charAt(0);
        char lastLetter=str.charAt(length-1);        

        String middleString=str.substring(1, length-1);

        return lastLetter + reverseString(middleString)+ firstLetter;
        
    }
    public static void main(String[] args){
        System.out.println(reverseString("hello"));
    }
}