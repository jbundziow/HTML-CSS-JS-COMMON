//querySelector() and querySelectorAll()

const title = document.querySelector('h1');
console.log(title); //got element 'h1'
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs); //nodeList of all 'p'

//Old methods similar to querySelector. But it works with elements that are added live by js.
//getElementByID('your_id')
//document.getElementsByClassName('your_class')
//document.getElementsByTagName('h1')



//using createElement() and append()
const new_p = document.createElement('p'); //new paragraph
new_p.textContent = ('Hey, I am a new paragraph!'); //.textContent
const myDiv = document.querySelector('.container'); //get div .container
myDiv.append(new_p); //put new_p into .container div by method append()

//appendChild = OLD METHOD
//append = NEW METHOD

//using remove()
//myDiv.remove() //DELETING ALL <div>

//using removeChild()
const first_p = myDiv.querySelector('p'); //get the firs <p> in div .container
//myDiv.removeChild(first_p); //DELETING ONE ELEMENT