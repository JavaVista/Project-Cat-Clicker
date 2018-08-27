const kitties = [
  {
    name: 'Reveal',
    image: 'assets/img/animal-3118722_640.jpg',
    counter: 0,
    id: 1
  },
  {
    name: 'Comfy',
    image: 'assets/img/cat-197175_640.jpg',
    counter: 0,
    id: 2
  }
];

// selected kitty
let index = 0;
let image = kitties.image;
let count = kitties.count;

// select page elements
let kittyCount = document.querySelector('.count');
let kittyName = document.querySelector('h2');
let element = document.querySelector('.content');

// Setup click handler
function handler() {
  addKitties();
  let kittyImage = document.querySelector('.kitty-image');
  kittyImage.addEventListener(
      'click',
      obj => {
          let elem = obj.target.parentElement.childNodes[4];
          console.log(elem.id);
          index++;
          elem.innerHTML = `CUTIE COUNT: ${index}`;
        },
        false
    );
}

// iterate thru the array
function addKitties() {
    let adding = '';
    kitties.forEach(cat => {
        adding += `<h2>${cat.name}</h2>
        <div class="kitty-name"></div>
        <div id=${cat.id} class="count">CUTIE COUNT: ${cat.counter}</div>
        <img class="kitty-image" src=${cat.image} alt="Here Kitty Kitty">`;
    });
    element.innerHTML = adding;
}

window.onload = () => {
    handler();
};
