
let image = document.querySelector('#kitty-image'),
    counter = 0;

image.addEventListener('click', () => {
    let kittyCount = document.querySelector('.count')
    counter++
    kittyCount.innerHTML = `CUTIE COUNT: ${counter}`;
}, false);

