import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Number : ");
        int x = scanner.nextInt();
        System.out.print("Enter another Number : ");
        int y = scanner.nextInt();
        add(x, y);
        scanner.close();
    }

    private static void add(int x, int y) {
        int sum = x + y;
        System.out.println("The Result is " + sum);
    }
}
