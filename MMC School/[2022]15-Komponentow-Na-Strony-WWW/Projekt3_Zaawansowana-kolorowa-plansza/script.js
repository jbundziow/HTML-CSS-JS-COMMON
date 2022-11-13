const box = document.querySelector('.box')
const speedBtns = document.querySelectorAll('[data-setting="speed"]')
const colorBtns = document.querySelectorAll('[data-setting="color"]')
const slider = document.querySelector('#slider')
const sliderInfo = document.querySelector('.slider-info')
const amountOfSquares = 798;


let range = 360
let animationSpeed = 3;



const createSquares = (amount) => {
	for (let i = 0; i < amount; i++) {
		const newSquare = document.createElement('div');
		newSquare.classList.add('square');
		box.append(newSquare)
	}
}

const changeColor = (square) => {
	let h;
	if (range === 360) {
		h = Math.floor(Math.random() * 360);
	}
	else {
		h = Math.floor(Math.random() * 60) + range;
	}
	const s = slider.value + '%';
	const l = 50 + '%';
	square.style.backgroundColor = `hsl(${h},${s},${l})`
}

const removeColor = (square) => {
	square.style.backgroundColor = '';
}

const changeAnimationSpeed = (durationInSeconds) => {
	squaresArr.forEach(s => {
		s.style.transitionDuration = `${durationInSeconds}s`
		removeColor(s);
	})
}

createSquares(amountOfSquares)

slider.addEventListener('input', () => {sliderInfo.textContent = slider.value})

const squaresArr = box.querySelectorAll('.square')
squaresArr.forEach(s => {
	s.addEventListener('mouseover', () => changeColor(s))
})

squaresArr.forEach(s => {
	s.addEventListener('mouseout', () => removeColor(s))
})



colorBtns.forEach(btn => {
	btn.addEventListener('click',() => {
		range = parseInt(btn.getAttribute('data-color-range'))
	})
})

speedBtns.forEach(btn => {
	btn.addEventListener('click',() => {
		animationSpeed = parseFloat(btn.getAttribute('data-speed'))
		changeAnimationSpeed(animationSpeed)
	})
})


// my additional function 4fun
//works only when removeColor() function is removed
// setInterval(() => {
// 	let x = amountOfSquares;
// 	squaresArr.forEach(s => {
// 		if (s.style.backgroundColor !== '') {
// 			x--;
// 		}
// 	})
// 	if (x === 0) {
// 		alert('Gratulacje! Pokolorowałeś wszystkie kwadraty!')
// 		squaresArr.forEach(s => {
// 			s.style.backgroundColor = '';
// 		})
// 	}
// }, 1000);