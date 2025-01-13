public class Palindrome{
    public static Boolean checkPalindrome(String str){
    
        int length=str.length();
        if(length<=1){
            return true;
        }
        char firstLetter=str.charAt(0);
        char lastLetter=str.charAt(length-1); 
        if(firstLetter!=lastLetter){
            return false;
        }       

        String middleString=str.substring(1, length-1);

        return checkPalindrome(middleString);
        
    }
    public static void main(String[] args){
        System.out.println(checkPalindrome("malayalam"));
    }
}