//Program counts days since Russo-Ukrainian war started and shows it in string.

//function 1
const dayOfTheWeekNow = () => {
    const dateNow = new Date();
    const todayNum = dateNow.getDay();
    
    switch (todayNum) {
        case 0:
            return 'Sunday';
            break;
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        default:
            return 'ERROR!'
            break;
    }
}

//function 2
const daysSinceBeginningRussoUkrainianWar = () => {
    const dateWhenTheWarStarded = new Date('February 24, 2022 00:00:00');
    const start_milisec = dateWhenTheWarStarded.getTime();
    
    const dateNow_milisec = Date.now();
    
    
    const result = Math.ceil((dateNow_milisec - start_milisec)/1000/60/60/24);
    return result;
}


//result string
console.log(`${dayOfTheWeekNow()} is a ${daysSinceBeginningRussoUkrainianWar()} day since the beginning of Russo-Ukrainian war.`);