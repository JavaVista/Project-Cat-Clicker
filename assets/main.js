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

// select page elements
let kittyCount = document.querySelectorAll('.count');
let kittyName = document.querySelectorAll('h2');
let element = document.querySelector('.content');

// Setup click handler
function handler() {
  addKitties();
  document
    .querySelectorAll('.kitty-image')
    .forEach(kittyImage =>
      kittyImage.addEventListener('click', incrementCat, false)
    );
}

// iterate thru the array
function addKitties() {
  let adding = '';
  kitties.forEach(cat => {
    adding += `<h2>${cat.name}</h2>
        <div class="kitty-name"></div>
        <div class="count">CUTIE COUNT: ${cat.counter}</div>
        <img id=${cat.id} class="kitty-image" src=${
      cat.image
    } alt="Here Kitty Kitty">`;
  });
  element.innerHTML = adding;
}

// each cat increment function
function incrementCat(e) {
  if (e.target === e.currentTarget) {
    let clicked = e.target.id;
    for (const obj of kitties) {
      if (obj.id == clicked) {
        let count1 = obj.counter++;
        e.target.previousSibling.previousSibling.innerHTML = `CUTIE COUNT: ${obj.counter}`;
        console.log(clicked, obj, count1);
      }
    }
  }
  e.stopPropagation();
}

window.onload = () => {
  handler();
};
