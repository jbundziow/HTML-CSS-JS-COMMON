//Program shows the difference between setTimeout() and setInterval()

function sayHelloWorld () {
    console.log('Hello world!');
}

function sayCyclic () {
    console.log('Cyclic hello world!');
}


//! ---------- setTimeout() ----------
setTimeout(sayHelloWorld,3000); //the function is called after 3 seconds
console.log('Program is still running.');
console.log('Program is still running..');
console.log('Program is still running...');




//! ---------- setInterval() ----------
setInterval(sayCyclic, 4000); //the function is executed in every 4 seconds

