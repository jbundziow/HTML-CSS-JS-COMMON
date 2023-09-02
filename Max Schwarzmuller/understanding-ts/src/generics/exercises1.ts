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

console.log(mapArray([1,2,3,4,5], (el)=>(el*2)));



/*
4. Stack Implementation:
Implement a generic stack class (Stack<T>) with the following methods: push, pop, and peek.
Ensure that the class enforces type safety, i.e., you cannot push a value of the wrong type onto the stack.
*/

/*
5. Dictionary Implementation:
Create a generic class called Dictionary<K, V> that represents a key-value dictionary.
It should have methods for adding, retrieving, and removing items by key.
*/

/*
6. Filter Function:
Write a generic filterArray function that takes an array and a predicate function as arguments.
It should return a new array containing only the elements that satisfy the predicate.
*/

/*
7. Promise Chain:
Write a function called chainPromises that takes an array of promises as input and returns a promise that resolves with an array of their resolved values.
Ensure that the function works with promises of different types.
*/

/*
8. Custom Result Type:
Define a generic Result<T, E> type that represents the result of an operation.
It should have two possible values: Ok(T) for a successful result and Err(E) for an error.
Implement functions for creating and working with Result instances.
*/

/*
9. Queue Implementation:
Create a generic queue class (Queue<T>) with methods for enqueueing and dequeuing items.
Ensure type safety in the queue operations.
*/












