const menu = document.querySelector('nav ul');
const btnExpandMenu = document.querySelector('.fa-bars');
const btnHideMenu = document.querySelector('.fa-times');
const bothButtons = document.querySelector('.burger');


bothButtons.addEventListener('click', function () {
	menu.classList.toggle('active');
    bothButtons.classList.toggle('active');
	btnExpandMenu.classList.toggle('hide');
    btnHideMenu.classList.toggle('hide');
});



