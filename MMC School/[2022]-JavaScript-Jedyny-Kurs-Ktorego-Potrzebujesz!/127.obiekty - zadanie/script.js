class Jedzonko {
	constructor (meal, price) {
		this.meal = meal;
		this.price = price;
	}

	showInfo() {
		return `${this.meal} kosztuje ${this.price}zł`
	}
}

const btns = document.querySelectorAll('button');
const paragraph = document.querySelector('p');


const first = new Jedzonko('Schabowy', 12.99);
const second = new Jedzonko('Parówki berlinki', 7.99);
const third = new Jedzonko('Tosty', 99.00);

btns[0].addEventListener('click', () => {paragraph.textContent = first.showInfo()});
btns[1].addEventListener('click', () => {paragraph.textContent = second.showInfo()});
btns[2].addEventListener('click', () => {paragraph.textContent = third.showInfo()});