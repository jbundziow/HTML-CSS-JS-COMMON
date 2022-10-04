let str = 'Audi, Mercedes, BMW, Nissan, Dodge';
console.log(str);

let arr = str.split(',');
arr = arr.map(element => element.trim()); //remove whitespaces
console.log(arr);

arr.length > 3 ? console.log('Jest OK!') : console.log('Nie jest OK');

arr.includes('Audi') ? arr.push('Dacia') : arr.pop();
console.log(arr);