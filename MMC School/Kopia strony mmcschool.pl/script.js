'use strict'


//TODO: newsletter - onclick action - change background to green and display text "Sprawdź maila i potwierdź subskrypcję! 🙂"



// ACCORDION

const accordionBtns = document.querySelectorAll('.accordion-btn')


function openAccordionItems () {
    const accordionInfo = this.nextElementSibling

    if(accordionInfo.classList.contains('active-accordion')) {
		accordionInfo.classList.remove('active-accordion')
        closeAccordionItems();
        // this.classList.remove('active-accordion-btn')
	} else {
    closeAccordionItems() //all
    accordionInfo.classList.add('active-accordion')
    this.classList.add('active-accordion-btn')
    console.log(this);

    //change '+' icon into '-'
    const icon = this.querySelector('.fa-solid');
    icon.classList.replace('fa-plus','fa-minus');
    }
}

const closeAccordionItems = () => {
    accordionBtns.forEach(btn => {
        btn.nextElementSibling.classList.remove('active-accordion')
        btn.classList.remove('active-accordion-btn')

        //change '-' icon into '+'
        const icon = btn.querySelector('.fa-solid');
        icon.classList.replace('fa-minus','fa-plus');
    })
}


const clickOutsideAccordionItems = (e) => {
    if (!(e.target.classList.contains('accordion-btn') ||
    e.target.classList.contains('accordion-info') ||
    e.target.classList.contains('accordion-info-text') ||
    e.target.classList.contains('fa-solid') 
    )) {
        closeAccordionItems();
    }
}

accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))
window.addEventListener('click', clickOutsideAccordionItems)


//COURSES SECTION


//courses__category-box-html-and-css-section
//courses__category-box-javascript-section
//courses__category-box-free-courses-section