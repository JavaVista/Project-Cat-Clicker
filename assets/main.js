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

// select page elements
let kittyCount = document.querySelectorAll('.count');
let kittyName = document.querySelectorAll('h2');
let element = document.querySelector('.content');

// Setup click handler
function handler() {
  addKitties();
  document
    .querySelectorAll('.kitty-image')
    .forEach(kittyImage => kittyImage.addEventListener('click', incrementCat));
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

// each cat increment function
function incrementCat(e) {

  if (e.target ===  kitties[0].image) {
    let count1 = kitties[0].counter++;
    e.target.innerHTML = `CUTIE COUNT: ${count1}`;
    console.log(e.target);
  } else {
    let count2 = kitties[1].counter++;
    e.target.innerHTML = `CUTIE COUNT: ${count2}`;
    console.log(e.target);
  }
}

window.onload = () => {
  handler();
};
