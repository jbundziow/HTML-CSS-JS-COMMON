'use strict'

const homeSection = document.querySelector('#home')
const aboutUsSection = document.querySelector('#about-us')
const workSection = document.querySelector('#work')
const contactSection = document.querySelector('#contact')

//buttons nav
const homeBtnNav = document.querySelector('.home-link')
const aboutusBtnNav = document.querySelector('.aboutus-link')
const workBtnNav = document.querySelector('.work-link')
const contactBtnNav = document.querySelector('.contact-link')

//global variables
let homeSectionDimensions, aboutUsSectionDimensions, workSectionDimensions, contactSectionDimensions;




const getDimensionsOfElement = (element) => {
    const topOfTheElement = $(element).offset().top;
    const bottomOfTheElement = topOfTheElement + element.offsetHeight;
    return [topOfTheElement, bottomOfTheElement]; //in pixels from the beggining of document
}

const HighlightNavButton = () => {
    const scrollTop = $(window).scrollTop();
    const middleOfTheScreen = scrollTop + window.innerHeight/2;

    homeBtnNav.classList.remove('active');
    aboutusBtnNav.classList.remove('active');
    workBtnNav.classList.remove('active');
    contactBtnNav.classList.remove('active');

    if (middleOfTheScreen >= homeSectionDimensions[0] && middleOfTheScreen < homeSectionDimensions[1]) {
        homeBtnNav.classList.add('active');
    }
    else if (middleOfTheScreen >= aboutUsSectionDimensions[0] && middleOfTheScreen < aboutUsSectionDimensions[1]) {
        aboutusBtnNav.classList.add('active');
    }
    else if (middleOfTheScreen >= workSectionDimensions[0] && middleOfTheScreen < workSectionDimensions[1]) {
        workBtnNav.classList.add('active');
    }
    else if (middleOfTheScreen >= contactSectionDimensions[0] && middleOfTheScreen < contactSectionDimensions[1]) {
        contactBtnNav.classList.add('active');
    }


}


window.addEventListener('DOMContentLoaded', () => {
    homeSectionDimensions = getDimensionsOfElement(homeSection);
    aboutUsSectionDimensions = getDimensionsOfElement(aboutUsSection);
    workSectionDimensions = getDimensionsOfElement(workSection);
    contactSectionDimensions = getDimensionsOfElement(contactSection);
    HighlightNavButton();
});
document.addEventListener('scroll', HighlightNavButton)