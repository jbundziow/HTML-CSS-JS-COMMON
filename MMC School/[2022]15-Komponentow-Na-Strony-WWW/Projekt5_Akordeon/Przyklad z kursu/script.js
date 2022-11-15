const accordionBtns = document.querySelectorAll('.accordion-btn')


function openAccordionItems () {
    const accordionInfo = this.nextElementSibling

    if(accordionInfo.classList.contains('active')) {
		accordionInfo.classList.remove('active')
	} else {
    closeAccordionItems() //all
    accordionInfo.classList.add('active')
    }
}

const closeAccordionItems = () => {
    accordionBtns.forEach(btn => btn.nextElementSibling.classList.remove('active'))
}


const clickOutsideAccordionItems = (e) => {
    if (!(e.target.classList.contains('accordion-btn') ||
    e.target.classList.contains('accordion-info') ||
    e.target.classList.contains('accordion-info-text') ||
    e.target.classList.contains('fas') ||
    e.target.classList.contains('far'))
    ) {
        closeAccordionItems();
    }
}

accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))
window.addEventListener('click', clickOutsideAccordionItems)