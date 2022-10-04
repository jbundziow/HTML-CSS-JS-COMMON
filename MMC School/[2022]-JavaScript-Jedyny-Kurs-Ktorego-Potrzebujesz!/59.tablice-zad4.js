let colors = ['green'];
console.log(colors);

colors.push('black');
colors.unshift('white');
console.log(colors);

colors.forEach(item => console.log(`Mój ulubiony kolor to: ${item.toUpperCase()}`));
console.log(colors);

function firstLetterUpperCase(str) {
    let result;
    result = str[0].toUpperCase();
    for (let i=1; i<str.length; i++) {
      result = result.concat(str[i]);
    }
    return result;
}

const newColors = colors.map(item => firstLetterUpperCase(item));
console.log(newColors);