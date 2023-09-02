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

    add(key: K, value: V): void {
        this.items.set(key,value);
    }
    get (key: K): V | undefined {
        return this.items.get(key)
    }
    getAll () {
        const obj: any = {};
        this.items.forEach((value: V, key: K) => {
            obj[key] = value;
        })
        return obj;
    }
    remove (key: K): void {
        this.items.delete(key);
    }
    
}

const dictionary = new Dictionary<string,number>();
dictionary.add('people', 227);
dictionary.add('average_age', 21);
dictionary.add('pets', 14);
console.log(dictionary.getAll());
dictionary.remove('average_age');
console.log(dictionary.getAll());
console.log(dictionary.get('pets'));
console.log('\n');


/*
9. Promise Chain:
Write a function called chainPromises that takes an array of promises as input and returns a promise that resolves with an array of their resolved values.
Ensure that the function works with promises of different types.
*/

async function chainPromises<T extends any[]>(promises: [...T]): Promise<T> {
    return Promise.all(promises);
}
const promise1 = Promise.resolve('string');
const promise2 = Promise.resolve(23);
const promise3 = Promise.resolve(true);


chainPromises([promise1, promise2, promise3])
.then(results => console.log(results))
.then(() => console.log('\n'))
.catch(err => console.log(err))




/*
10. Custom Result Type:
Define a generic Result<T, E> type that represents the result of an operation.
It should have two possible values: Ok(T) for a successful result and Err(E) for an error.
Implement functions for creating and working with Result instances.
*/

type Result<T, E> = { type: 'Ok'; value: T } | { type: 'Err'; error: E };

function ok<T>(value: T): Result<T, never> {
    return { type: 'Ok', value };
}

function err<E>(error: E): Result<never, E> {
    return { type: 'Err', error };
}


const successResult: Result<number, string> = ok(42);
const errorResult: Result<number, string> = err("Something went wrong");
console.log(successResult);
console.log(errorResult);
console.log('\n')



/*
11. Queue Implementation:
Create a generic queue class (Queue<T>) with methods for enqueueing and dequeuing items.
Ensure type safety in the queue operations.
*/

class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }
}


const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log('\n');











