package SearchAlgorithms;

public class BinarySearch {
    public int search(int[] array, int find){
        return search(array, find, 0, array.length - 1);
    }

    private int search(int[] array, int find, int left, int right){
        if (right >= left){
            int mid = left + (right - left) / 2;

            if (array[mid] == find)
                return mid;
            if (array[mid] > find)
                return search(array, find, left, mid - 1);

            return search(array, find, mid + 1, right);
        }
        return -1;
    }
}
