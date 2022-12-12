'use strict'

//HAMBURGER HEADER MENU

const menu = document.querySelector('.header__list');
const btnExpandMenu = document.querySelector('.burger');
const menuLinks = document.querySelectorAll('.header__list-item > a')
const btnBars = document.querySelector('.burger .fa-bars')
const btnTimes = document.querySelector('.burger .fa-times')

menuLinks.forEach(link => {
    link.addEventListener('click', () => {menu.classList.add('burger-hide'); changeBurgerIcon();})
})

btnExpandMenu.addEventListener('click', function () {menu.classList.toggle('burger-hide'); changeBurgerIcon();});

const changeBurgerIcon = () => {
    btnBars.classList.remove('burger-button-hide')
    btnTimes.classList.remove('burger-button-hide')

    if (menu.classList.contains('burger-hide')) {
        btnTimes.classList.add('burger-button-hide')
    }
    else {
        btnBars.style.rota
        btnBars.classList.add('burger-button-hide')
    }
}


//SCROLLSPY
const menuItems = document.querySelectorAll('.header__list-item a')
const scrollSpySections = document.querySelectorAll('section')

console.log(menuItems);
console.log(scrollSpySections);


const handleScrollSpy = () => {
    if(document.body.classList.contains('main-page')) {
        const sections = []

        scrollSpySections.forEach(section => {

            if(window.scrollY <= section.offsetTop + section.offsetHeight -103) {
                sections.push(section)
                const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
                
                menuItems.forEach(item => item.classList.remove('header__list-item-active'))
                activeSection.classList.add('header__list-item-active')
            }

            if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - -300) {
                const lastSection = document.querySelector('.header__list-item a:last-of-type')
                menuItems.forEach(item => item.classList.remove('header__list-item-active'))
                lastSection.classList.add('header__list-item-active')
            }

        })
    }
}
window.addEventListener('scroll', handleScrollSpy)

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

const allCourseBtns = document.querySelectorAll('.courses__btn')
const btnAllCourses = document.querySelector('.courses__btn-all-courses')
const btnHtmlCss = document.querySelector('.courses__btn-html-and-css')
const btnJavascript = document.querySelector('.courses__btn-javascript')
const btnFreeCourses = document.querySelector('.courses__btn-free-courses')

const sectionHtmlCss = document.querySelector('.courses__category-box-html-and-css-section')
const sectionJavascript = document.querySelector('.courses__category-box-javascript-section')
const sectionFreeCourses = document.querySelector('.courses__category-box-free-courses-section')

const displayCoursesSection = (name) => {
    setCoursesButtonAsActive(name)
    
    switch (name) {
        case 'all':
            sectionHtmlCss.style.display = 'initial';
            sectionJavascript.style.display = 'initial';
            sectionFreeCourses.style.display = 'initial';
            break;
        case 'htmlcss':
            sectionHtmlCss.style.display = 'initial';
            sectionJavascript.style.display = 'none';
            sectionFreeCourses.style.display = 'none';
            break;
        case 'javascript':
            sectionHtmlCss.style.display = 'none';
            sectionJavascript.style.display = 'initial';
            sectionFreeCourses.style.display = 'none';
            break;
        case 'freecourses':
            sectionHtmlCss.style.display = 'none';
            sectionJavascript.style.display = 'none';
            sectionFreeCourses.style.display = 'initial';
            break;
    
        default:
            console.error('An issue in displayCoursesSection().')
            break;
    }
}

const setCoursesButtonAsActive = (name) => {
    allCourseBtns.forEach(btn => btn.classList.remove('courses__btn-active'))

    switch (name) {
        case 'all':
            btnAllCourses.classList.add('courses__btn-active')
            break;
        case 'htmlcss':
            btnHtmlCss.classList.add('courses__btn-active')
            break;
        case 'javascript':
            btnJavascript.classList.add('courses__btn-active')
            break;
        case 'freecourses':
            btnFreeCourses.classList.add('courses__btn-active')
            break;
        default:
            console.error('An issue in setCoursesButtonAsActive().')
            break;
    }
}



btnAllCourses.addEventListener('click', () => {displayCoursesSection('all')})
btnHtmlCss.addEventListener('click', () => {displayCoursesSection('htmlcss')})
btnJavascript.addEventListener('click', () => {displayCoursesSection('javascript')})
btnFreeCourses.addEventListener('click', () => {displayCoursesSection('freecourses')})







// CONTACT FORM - animation for inputs

const changeAllLabelsIntoPlaceholders = () => {
    const allLabels = document.querySelectorAll('.contact-label')
    allLabels.forEach(label => {
    if (label.nextElementSibling.value === '') {
        label.classList.remove('contact-label-active')
        label.nextElementSibling.style.borderBottom = 'none'
    }
})
}

//CLICK ACTION
window.addEventListener('click', (e) => {
    changeAllLabelsIntoPlaceholders()

    if (e.target.classList.contains('contact-label')) {
        e.target.classList.add('contact-label-active')
        e.target.nextElementSibling.focus()
        e.target.nextElementSibling.style.borderBottom = '2px solid var(--main-color)'
    }
    else if (e.target.classList.contains('contact__form')) {
        e.target.previousElementSibling.classList.add('contact-label-active');
        e.target.style.borderBottom = '2px solid var(--main-color)'
    }
});

//FOCUS ACTION (WHILE USER NAVIGATE ON WEBSITE USING 'TAB' BUTTON)
const allInputs = document.querySelectorAll('.contact__form');
    allInputs.forEach(input => {
        input.addEventListener('focus', () => {
            changeAllLabelsIntoPlaceholders()
            if (input === document.activeElement) {
                input.previousElementSibling.classList.add('contact-label-active');
                input.style.borderBottom = '2px solid var(--main-color)'
            }
        })
    })

