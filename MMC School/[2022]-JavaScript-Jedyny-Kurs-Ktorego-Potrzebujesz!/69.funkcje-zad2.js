let celsius;
let temp;

const fahrenheit = (cel) => {
  celsius = cel;
  temp = celsius *1.8 +32;
  console.log(`${celsius} °C = ${temp} °F`);
}

fahrenheit(-50);