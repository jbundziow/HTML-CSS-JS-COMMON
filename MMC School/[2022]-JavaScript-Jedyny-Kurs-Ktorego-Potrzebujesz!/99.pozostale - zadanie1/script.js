const picture = document.querySelector('img');

picture.setAttribute('src','https://img.pixers.pics/pho_wat(s3:700/FO/13/57/84/3/700_FO1357843_424b614e36e28e48e20c597b292452d5.jpg,700,574,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,524,jpg)/koce-pluszowe-szpic-pomeranian.jpg.jpg');
picture.setAttribute('alt','pomeranian-dog');



const writeHelloWorldInConsole = () => console.log('Hello world after 5 sec!');

function delay5sec() {
    setInterval(writeHelloWorldInConsole, 5000);
}

delay5sec();