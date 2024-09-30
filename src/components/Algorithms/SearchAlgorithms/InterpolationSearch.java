package SearchAlgorithms;

public class InterpolationSearch {
    public int search(int[] array, int find){
        int high = array.length - 1;
        int low = 0;

        while (find >= array[low] && find <= array[high] && low <= high){
            int probe = low + (high - low) * (find - array[low]) /
                    (array[high] - array[low]);
            System.out.println("probe: " + probe);

            if (array[probe] == find)
                return probe;
            else if(array[probe] < find){
                low = probe + 1;
            } else {
                high = probe - 1;
            }
        }
        return -1;
    }
}
