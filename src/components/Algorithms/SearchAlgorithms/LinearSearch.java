package SearchAlgorithms;

public class LinearSearch {
    public int search(int[] array, int find){
        for (int i = 0; i < array.length; i++){
            if (array[i] == find)
                return i;
        }
        return -1;
    }
}
