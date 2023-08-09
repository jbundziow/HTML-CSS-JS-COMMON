console.log('script wokrs');
const arr = []
const addProductToCard = () => {
    arr.push('x')
    console.log('clicked');
    localStorage.setItem('sessionData', arr);

    const storedData = localStorage.getItem('sessionData');
    console.log(typeof storedData);
}