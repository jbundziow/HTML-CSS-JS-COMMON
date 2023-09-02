/*
1. Identity Function:
Write an identity function that takes a generic argument and returns it unchanged.
Then, use the function to demonstrate type inference.
*/


const identity =<Type> (arg: Type): Type => {
    return arg;
}

console.log(identity('Hello typescript!\n'));


/*
2. Array Utilities:
Write a generic function that takes an array and returns the first and last elements in the array as a tuple.
*/

const getFirstAndLastArrayElementAsTuple =<A> (arr: A[]): [A,A] => {
    return [arr[0], arr[arr.length-1]]
}

console.log(getFirstAndLastArrayElementAsTuple([2,4,'xd'])+'\n');


/*
3. Custom Map Function:
Create a generic function called mapArray that takes an array and a mapping function as arguments.
It should apply the mapping function to each element of the array and return a new array with the mapped values.
*/

const mapArray =<T,U> (arr: T[], mappingFn: (item: T) => U): U[] => {
    return arr.map(mappingFn);
}

console.log(mapArray([1,2,3,4,5], el => el*2)+'\n');


/*
4. Generic Swap Function:
Write a TypeScript function called swap that takes two generic arguments and swaps their values.
*/
const swap =<T,U> (arg1: T, arg2: U): [U,T] => {
    return [arg2, arg1]
}
console.log(swap('hey',92)+'\n');

/*
5. Generic Array Reversal:
Create a TypeScript function called reverseArray that takes an array of generic type and returns a new array with its elements reversed.
*/
const reverseArray =<T> (arr: T[]): T[] => {
    return arr.reverse()
}

console.log(reverseArray([1,2,3,'text',4,5]) +'\n');

/*
6. Generic Element Finder:
Write a TypeScript function called findElement that takes an array of generic type and a predicate function.
It should return the first element in the array that satisfies the predicate.
*/
function findElement<T>(arr: T[], predicateFn: (item: T) => boolean): T | undefined {
    return arr.find(predicateFn)
}

console.log(findElement([1, 2, 3, 4, 5], (num) => num % 2 === 0))
console.log(findElement([1, 2, 3, 4, 5], (num) => num % 6 === 0)) //undefined
console.log(findElement(["apple", "banana", "strawberry"], (fruit) => fruit.length > 6)+'\n')

/*
7. Stack Implementation:
Implement a generic stack class (Stack<T>) with the following methods: push, pop, and peek.
Ensure that the class enforces type safety, i.e., you cannot push a value of the wrong type onto the stack.
*/
class Stack<T> {
    private stack: T[] = [];

    push(item: T): void {
        this.stack.push(item)
    }

    pop(): T | undefined {
        return this.stack.pop()
    }

    peek(): T | undefined {
        return this.stack[this.stack.length -1]
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.peek());
stack.push(3);
console.log(stack.pop());
console.log(stack.peek());
console.log('\n');



/*
8. Dictionary Implementation:
Create a generic class called Dictionary<K, V> that represents a key-value dictionary.
It should have methods for adding, retrieving, and removing items by key.
*/
class Dictionary<K,V> {
    private items: Map<K,V> = new Map()

    add(key: K, value: V) {
        this.items.set(key,value);
    }
    
}

/*
9. Filter Function:
Write a generic filterArray function that takes an array and a predicate function as arguments.
It should return a new array containing only the elements that satisfy the predicate.
*/

/*
10. Promise Chain:
Write a function called chainPromises that takes an array of promises as input and returns a promise that resolves with an array of their resolved values.
Ensure that the function works with promises of different types.
*/

/*
11. Custom Result Type:
Define a generic Result<T, E> type that represents the result of an operation.
It should have two possible values: Ok(T) for a successful result and Err(E) for an error.
Implement functions for creating and working with Result instances.
*/

/*
12. Queue Implementation:
Create a generic queue class (Queue<T>) with methods for enqueueing and dequeuing items.
Ensure type safety in the queue operations.
*/












