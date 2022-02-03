class CommandArgs{
    public static void main(String[] argv) {
        if(argv.length > 0) {
            System.out.println(argv[0]);
        } else {
            System.out.println("No args found!!!");
        }
        
    }
}