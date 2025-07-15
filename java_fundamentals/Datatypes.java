import java.util.Scanner;

public class Datatypes {
    public static void main(String[] args) {
        // Primitive Types
        int q = 23, w = 23_000_000;
        char l = 'r';
        float r = 23.4f;
        double d = 26464923.333333333333344;
        long lr = 2323891724124812642L;
        boolean e = true;

        // Non-primitive types
        String str = null;
        String str1 = "Sharan";

        int[] arr = null;
        int[] arr1 = {1, 3};

        // Wrapper Classes
        Integer int1 = 64;
        Character l1 = 'c';
        Float f1 = 23.3f;
        Double dd = 6482369.248245891;
        Long ddl = 21936294279332064L;
        Boolean e2 = null;

        // we can assign variables like this too
        String str2 = new String("hello");

        // Scanner input = new Scanner(System.in);
        // double f2 = input.nextDouble();
        // System.out.println(f2);

        // Explicit type casting (Narrowing)
        int a = (int)(34.5); // 34
        char c1 = (char)(65); // A
    }
}
