const btn = document.querySelector('.arrow');
const img1 = document.querySelector('.item1');

//add hide class
//zmien ikonke

function ShowOrHideImg () {
    const icon = document.querySelector('i');
    if (img1.classList.contains('hide')) {
        img1.classList.remove('hide');
        icon.classList.replace('fa-arrow-up', 'fa-arrow-down');
    }
    else
    {
        img1.classList.add('hide');
        icon.classList.replace('fa-arrow-down', 'fa-arrow-up');
    }
}

// console.log(ShowOrHideImg());
btn.addEventListener('click', ShowOrHideImg);