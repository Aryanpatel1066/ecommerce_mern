package MethodsQuestion;

import java.util.Scanner;

public class practiceQuestion1 {
    public static double averageOfThree (double num1,double num2,double num3){
        double  result = (num1 + num2  + num3) /3;
        return result;
    }
    public static  boolean isEven(int a){
        if(a % 2 == 0){
            return true;
        }
        else return false;
    }
    public static boolean isPalindrome(int a){
        int copyValue =  a;
        int reverseNumber = 0;
        while (copyValue != 0) {
            int lastDigit = a % 10;
        reverseNumber = reverseNumber *10 + lastDigit;
            copyValue = copyValue/ 10;

        }
     if(a == reverseNumber){
         return true;
     }
     else{
         return false;
     }
     }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //question1) the avg of three number using method
//        System.out.println("Enter number1: ");
//        double num1 = sc.nextInt();
//        System.out.println("Enter number2: ");
//        double num2 = sc.nextInt();
//        System.out.println("Enter number3: ");
//        double num3 = sc.nextInt();
//        System.out.println(averageOfThree(num1,num2,num3));

        //question2) isEven method check is even or not return true or false

//        System.out.println("enter number : ");
//        int num1 = sc.nextInt();
//        System.out.println(isEven(num1));

        //question3) make a function is palindrome or not
        System.out.println("enter a number :");
        int num1 = sc.nextInt();
          if(isPalindrome(num1)){
              System.out.println("number"+num1 + "is palindrome");
          }
          else{
              System.out.println("number"+num1 + "is palindrome");
          }
    }
}
