"use strict";
/*
Exercise 2: Sorting with Interfaces (TypeScript)
Create a Sortable interface with a length property and a less(i: number, j: number): boolean method to represent a sortable collection.
Implement this interface for a numeric array. Then, use the sort method to sort the array in ascending order. Print the sorted array.
*/
class NumericArray {
    constructor(arr) {
        this.arr = arr;
        this.arr = arr;
        Object.freeze(this.arr); //freeze to do not allow modify an array
    }
    get length() {
        return this.arr.length;
    }
    get array() {
        return this.arr;
    }
    less(i, j) {
        return this.arr[i] < this.arr[j];
    }
    sortAscendingWithoutModyfyingOriginalArray() {
        const copyArr = [...this.arr];
        return copyArr.sort((a, b) => (a - b));
    }
}
const numArr = new NumericArray([9, 6, 12, 2, 1]);
console.log(numArr.array);
console.log(numArr.sortAscendingWithoutModyfyingOriginalArray());
console.log(numArr.array);
console.log('Length: ' + numArr.length);
console.log(numArr.less(2, 3));
console.log(numArr.less(3, 2));
