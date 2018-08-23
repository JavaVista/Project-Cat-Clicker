
const kitties = [
    {
        name: 'Reveal',
        image: '../assets/img/animal-3118722_640.jpg',
        counter: 0
    },
    {
        name: 'Comfy',
        image: '../assets/img/cat-197175_640.jpg',
        counter: 0
    },
]

let image = document.querySelector('#kitty-image');

image.addEventListener('click', () => {
    let kittyCount = document.querySelector('.count')
    counter++
    kittyCount.innerHTML = `CUTIE COUNT: ${counter}`;
}, false);

