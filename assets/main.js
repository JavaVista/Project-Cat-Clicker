// Model
const model = [
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
  },
  {
    name: 'Under',
    image: 'assets/img/cat-278191_640.jpg',
    counter: 0,
    id: 3
  },
  {
    name: 'Glasses',
    image: 'assets/img/cat-984097_640.jpg',
    counter: 0,
    id: 4
  },
  {
    name: 'Wink',
    image: 'assets/img/cat-1333926_640.jpg',
    counter: 0,
    id: 5
  },
  {
    name: 'Lean',
    image: 'assets/img/cat-2151382_640.jpg',
    counter: 0,
    id: 6
  },
  {
    name: 'See',
    image: 'assets/img/cat-2258190_640.jpg',
    counter: 0,
    id: 7
  },
  {
    name: 'Side',
    image: 'assets/img/cat-2348997_640.jpg',
    counter: 0,
    id: 8
  },
  {
    name: 'Cover',
    image: 'assets/img/cat-2806957_640.jpg',
    counter: 0,
    id: 9
  },
  {
    name: 'Wide',
    image: 'assets/img/cat-3553106_640.jpg',
    counter: 0,
    id: 10
  },
  {
    name: 'Bowl',
    image: 'assets/img/cats-3606836_640.jpg',
    counter: 0,
    id: 11
  },
  {
    name: 'Mean',
    image: 'assets/img/doll-1636212_640.jpg',
    counter: 0,
    id: 12
  },
  {
    name: 'Plant',
    image: 'assets/img/kitten-looking-at-you-1995976_640.jpg',
    counter: 0,
    id: 13
  }
];

// Octopus
const octopus = (() => {
  selectedKitty = model[0];
  function init() {
    kittyView.handler();
    kittyView.render(selectedKitty);
  }
  function incrementCat(e) {
    selectedKitty.counter++;
    kittyView.render(selectedKitty);
    e.stopPropagation();
  }
  return {
    init,
    incrementCat

  }
})();
window.addEventListener('load', octopus.init);

// View
const kittyView = (() => {
  let element = document.querySelector('.content');

  function handler() {
    //let kittyImage = document.querySelector('.kitty-image');
    element.addEventListener('click' , octopus.incrementCat, false);
  }

  function render(cat) {
    element.innerHTML = `
    <div class="kitty-name">
    <h2>${cat.name}</h2>
    <div class="count">CUTIE COUNT: ${cat.counter}</div>
    <img id=${cat.id} class="kitty-image" src=${cat.image} alt="Here Kitty Kitty">
    </div>`;
  }
  return {
    handler,
    render
  };
})();




/////////////////////////////////////////

// select page elements
let kittyCount = document.querySelectorAll('.count');
let kittyName = document.querySelectorAll('h2');
let element = document.querySelector('.content');

// button menu handler
function buttonHandler() {
  let buttons = document.querySelector('.side');
  buttons.addEventListener('click', selectKitty, false);
}

function selectKitty(e) {
  if (e.target !== e.currentTarget) {
    addKitties(e);
  }
  e.stopPropagation();
}

// image click handler
function handler() {
  let kittyImage = document.querySelector('.kitty-image');
  kittyImage.addEventListener('click', incrementCat, false);
}

// iterate thru the array
function addKitties(e) {
  let adding = '';
  model.forEach(cat => {
    if (e.target.id == cat.id) {
      adding = `
      <div class="kitty-name">
      <h2>${cat.name}</h2>
          <div class="count">CUTIE COUNT: ${cat.counter}</div>
          <img id=${cat.id} class="kitty-image" src=${
        cat.image
      } alt="Here Kitty Kitty"></div>`;
      element.innerHTML = adding;
      handler();
    }
  });
}

// each cat increment function
function incrementCat(e) {
  if (e.target === e.currentTarget) {
    let clicked = e.target.id;
    for (const obj of model) {
      if (obj.id == clicked) {
        obj.counter++;
        e.target.previousSibling.previousSibling.innerHTML = `CUTIE COUNT: ${
          obj.counter
        }`;
      }
    }
  }
  e.stopPropagation();
}

window.onload = () => {
  buttonHandler();
};
