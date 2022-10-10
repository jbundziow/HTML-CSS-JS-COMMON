const myParagraph = document.querySelector('p');

// ! innerHTML - returns everything inside <p>
console.log(myParagraph.innerHTML);

// ! outerHTML - returns everything (together with <p> and </p>)
console.log(myParagraph.outerHTML);


// additional: textContent returns only text inside
console.log(myParagraph.textContent);