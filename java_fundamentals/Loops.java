public class Loops {
    public static void main(String[] args) {
        // While loop
        int count = 1;
        while (count <= 5) {
            System.out.print(count + " ");
            count++;
        }
        // for spacing
        System.out.println("");
        // for loop
        for(int i = 1; i <= 5; i++) {
            System.out.println(i);
        }

        // For each loop
        String[] arr = {"A", "B", "C", "D"};

        for (String i : arr) {
            System.out.print(i + " ");
            if (i == arr[arr.length - 1]) {
                System.out.println();
            }
        }
    }
}
