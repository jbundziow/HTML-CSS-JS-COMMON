const input = document.querySelector('input');
const warningText = document.querySelector('.warning');

const filterTheList = () => {
    const ulList = document.querySelector('ul');
    const liItems = ulList.querySelectorAll('li');
    let counter = 0;
    warningText.textContent = '';
    for (let i=0; i<liItems.length; i++) {
        liItems[i].style.borderBottom = '1px solid rgb(224, 224, 224)'; //set border bottom for every elements
        if (liItems[i].textContent.toLowerCase().includes(input.value.toLowerCase())) {
            liItems[i].style.display = 'block';
        }
        else {
            liItems[i].style.display = 'none';
            counter ++;
        }
        if (counter === liItems.length) {
            warningText.textContent = 'Nic nie znaleziono...';
        }
    }

    //remove border bottom for last element in list
    let lastEl;
    for (let i=0; i<liItems.length; i++) {
        if (liItems[i].style.display === 'block') {
            lastEl = liItems[i];
        }
    }
    if (lastEl !== undefined) {
    lastEl.style.borderBottom = 'none';
    }

}


input.addEventListener('keyup', filterTheList)