/*
Zadanie z pobierania elementów
Skopiuj poniższy kod HTML i pobierz wszystkie elementy do zmiennych. 🙂
Skorzystaj oczywiście z querySelector'ów. W kolejnym artykule zobaczysz rozwiązanie tego ćwiczenia. 👍

<h1>pobierz mnie do zmiennej 'heading'</h1>
<p>pobierz mnie do elementu tablico-podobnego razem z innymi paragrafami!</p>
<p>pobierz mnie do elementu tablico-podobnego razem z innymi paragrafami!</p>
<p>pobierz mnie do elementu tablico-podobnego razem z innymi paragrafami!</p>
<div class="test">
    <p>pobierz DIV-a z klasą test do jakiejś zmiennej</p>
    <p id="test">następnie pobierz ten paragraf, ale nie przeszukuj całego `document`, przeszukaj tylko DIV-a z klasą test</p>
</div>
*/

const heading = document.querySelector('h1');
console.log(heading);

const pe = document.querySelectorAll('p');
console.log(pe);

const mytest1 = document.querySelector('.test');
console.log(mytest1);

const mytest2 = document.querySelector('.test > #test');
console.log(mytest2);


