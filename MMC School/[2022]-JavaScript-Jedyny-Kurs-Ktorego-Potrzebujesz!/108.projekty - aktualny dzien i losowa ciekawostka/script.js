const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.'
]

//GET DAY OF THE WEEK
//const dayOfWeekDigit = new Date().getDay(); //e.g. thursday = 4
const dayOfTheWeekToday = new Date().toLocaleString('pl', {weekday: 'long'}); //e.g. 'czwartek'

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
  }

currentDay.textContent = capitalizeFirstLetter(dayOfTheWeekToday); //e.g. 'Czwartek'


//GET RANDOM FACT
const randomFactNumber = Math.floor(Math.random() * facts.length); //random number from 0 to 7
funFact.textContent = facts[randomFactNumber];
