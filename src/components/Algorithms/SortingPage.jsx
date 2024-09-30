import React, { useState } from "react";
import bubbleSort from "./SortingAlgorithms/BubbleSort.jsx";
import heapSort from "./SortingAlgorithms/HeapSort.jsx";
import insertionSort from "./SortingAlgorithms/InsertionSort.jsx";
import "./SortingPage.css";

const algorithms = {
  bubble: {
    name: "Bubble Sort",
    code: `package SortingAlgorithms;\n\npublic class BubbleSort {\n\n    public void sort (int[] array){\n        boolean isSorted;\n        for (int i = 0; i < array.length; i++){\n            isSorted = true;\n            for (int j = 1; j < array.length - i; j++){\n                if (array[j] < array[j-1]){\n                    swap(array, j, j-1);\n                    isSorted = false;\n                }\n            }\n            if (isSorted)\n                return;\n        }\n        return;\n    }\n\n    private void swap(int[] array, int index1, int index2){\n        int temp = array[index1];\n        array[index1] = array[index2];\n        array[index2] = temp;\n    }\n}\n`,
  },
  heap: {
    name: "Heap Sort",
    code: `package SortingAlgorithms;\n\npublic class HeapSort {\n\n    public void sort (int[] array) {\n        int n = array.length;\n        for (int i = n / 2 - 1; i >= 0; i--) {\n            heapify(array, n, i);\n        }\n        for (int i = n - 1; i >= 0; i--) {\n            int temp = array[0];\n            array[0] = array[i];\n            array[i] = temp;\n            heapify(array, i, 0);\n        }\n    }\n\n    private void heapify(int[] array, int n, int i) {\n        int largest = i;\n        int left = 2 * i + 1;\n        int right = 2 * i + 2;\n\n        if (left < n && array[left] > array[largest]) {\n            largest = left;\n        }\n        if (right < n && array[right] > array[largest]) {\n            largest = right;\n        }\n        if (largest != i) {\n            int temp = array[i];\n            array[i] = array[largest];\n            array[largest] = temp;\n            heapify(array, n, largest);\n        }\n    }\n}\n`,
  },
  insertion: {
    name: "Insertion Sort",
    code: `package SortingAlgorithms;\n\npublic class InsertionSort {\n\n    public void sort(int[] array) {\n        for (int i = 1; i < array.length; i++) {\n            int key = array[i];\n            int j = i - 1;\n\n            while (j >= 0 && array[j] > key) {\n                array[j + 1] = array[j];\n                j--;\n            }\n            array[j + 1] = key;\n        }\n    }\n}\n`,
  },
};

const generateRandomArray = (size = 30) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
};

const SortingPage = () => {
  const [array, setArray] = useState(generateRandomArray());
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubble");
  const [code, setCode] = useState(algorithms.bubble.code);

  const handleScramble = () => {
    setArray(generateRandomArray());
  };

  const handleSort = () => {
    const sortedArray = [...array];
    const algorithm = selectedAlgorithm;
    if (algorithm === "bubble") bubbleSort(sortedArray);
    if (algorithm === "heap") heapSort(sortedArray);
    if (algorithm === "insertion") insertionSort(sortedArray);
    setArray(sortedArray);
  };

  const handleAlgorithmChange = (event) => {
    const algorithm = event.target.value;
    setSelectedAlgorithm(algorithm);
    setCode(algorithms[algorithm].code);
  };

  return (
    <div className="page-container">
      <h1 className="header">Sorteringsalgoritmer</h1>
      <div className="content-container">
        <div className="left-panel">
          <div>
            <label>Välj sorteringsalgoritm: </label>
            <select value={selectedAlgorithm} onChange={handleAlgorithmChange}>
              <option value="bubble">Bubble Sort</option>
              <option value="heap">Heap Sort</option>
              <option value="insertion">Insertion Sort</option>
            </select>
          </div>
          <div style={{ marginTop: "20px" }}>
            <button onClick={handleScramble}>Scramble</button>
            <button onClick={handleSort}>Sort</button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>Listan:</p>
            <p>{array.join(", ")}</p>
          </div>
        </div>
        <div className="right-panel">
          <h2>Kod för {algorithms[selectedAlgorithm].name}</h2>
          <pre>{code}</pre>
        </div>
      </div>
    </div>
  );
};

export default SortingPage;
