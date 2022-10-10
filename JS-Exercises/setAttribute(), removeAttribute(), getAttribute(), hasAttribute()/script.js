const link = document.querySelector('a');
const myClg = document.querySelector('.results > textarea');

myClg.textContent = 'Welcome!\nLink redirect to "https://github.com/jbundziow"\n';


//! --------- setAttribute() ----------
const clickedSet = () => {
    link.setAttribute('href','https://github.com/jbundziow');
    myClg.textContent += 'Changed "href" to "https://github.com/jbundziow"\n';
    scrollDownTextarea();
}

//! --------- removeAttribute() ----------
const clickedRemove = () => {
    link.removeAttribute('href');
    myClg.textContent += 'Removed attribute "href"\n';
    scrollDownTextarea();
}

//! --------- getAttribute() ----------
const clickedGet = () => {
    let savedAttributeContent = link.getAttribute('href');
    myClg.textContent += `Read value: ${savedAttributeContent}\n`;
    scrollDownTextarea();
}

//! --------- hasAttribute() ----------
const clickedHas = () => {
    let respond = link.hasAttribute('href');
    myClg.textContent += `Link has attribute 'href'?: ${respond}\n`;
    scrollDownTextarea();
}


   function scrollDownTextarea() {
        myClg.scrollTop = myClg.scrollHeight;
   }
