// Model
const model = [
  {
    name: 'Reveal',
    image: 'assets/img/animal-3118722_640.jpg',
    counter: 0,
    selected: false,
    id: 1
  },
  {
    name: 'Comfy',
    image: 'assets/img/cat-197175_640.jpg',
    counter: 0,
    selected: false,
    id: 2
  },
  {
    name: 'Under',
    image: 'assets/img/cat-278191_640.jpg',
    counter: 0,
    selected: false,
    id: 3
  },
  {
    name: 'Glass',
    image: 'assets/img/cat-984097_640.jpg',
    counter: 0,
    selected: false,
    id: 4
  },
  {
    name: 'Wink',
    image: 'assets/img/cat-1333926_640.jpg',
    counter: 0,
    selected: false,
    id: 5
  },
  {
    name: 'Lean',
    image: 'assets/img/cat-2151382_640.jpg',
    counter: 0,
    selected: false,
    id: 6
  },
  {
    name: 'See',
    image: 'assets/img/cat-2258190_640.jpg',
    counter: 0,
    selected: false,
    id: 7
  },
  {
    name: 'Side',
    image: 'assets/img/cat-2348997_640.jpg',
    counter: 0,
    selected: false,
    id: 8
  },
  {
    name: 'Cover',
    image: 'assets/img/cat-2806957_640.jpg',
    counter: 0,
    selected: false,
    id: 9
  },
  {
    name: 'Wide',
    image: 'assets/img/cat-3553106_640.jpg',
    counter: 0,
    selected: false,
    id: 10
  },
  {
    name: 'Bowl',
    image: 'assets/img/cats-3606836_640.jpg',
    counter: 0,
    selected: false,
    id: 11
  },
  {
    name: 'Mean',
    image: 'assets/img/doll-1636212_640.jpg',
    counter: 0,
    selected: false,
    id: 12
  },
  {
    name: 'Plant',
    image: 'assets/img/kitten-looking-at-you-1995976_640.jpg',
    counter: 0,
    selected: false,
    id: 13
  }
];

// Octopus
const octopus = (() => {
  selectedKitty = model[0];
  function init() {
    kittyView.handler();
    kittyList.buttonHandler();
    kittyView.render(selectedKitty);
    kittyList.renderList(model);
  }

  function selectKitty(id) {
    selectedKitty = model.find(cat => {
      return cat.id === Number(id);
    });
    kittyView.render(selectedKitty);
  }

  function incrementCat(e) {
    selectedKitty.counter++;
    kittyView.render(selectedKitty);
    e.stopPropagation();
  }

  return {
    init,
    incrementCat,
    selectKitty
  };
})();
window.addEventListener('load', octopus.init);

// View
const kittyView = (viewElement => {
  let element = viewElement;
 /*TODO: target picture e targeting outside of it to increase counter
  let kittyImage = document.querySelector('.kitty-image'); */
  function handler() {
    element.addEventListener('click', octopus.incrementCat, false);
  }

  function render(cat) {
    element.innerHTML = `
    <div class="kitty-name">
    <h2>${cat.name}</h2>
    <div class="count">CUTIE COUNT: ${cat.counter}</div>
    <img id=${cat.id} class="kitty-image" src=${
      cat.image
    } alt="Here Kitty Kitty">
    </div>
    <div class="admin edit-kitty"><p>Select an Kitty image if you want to edit it or to add a different image</p>
<button id="edit">Edit Kitty</button>
</div>`;
  }
  return {
    render,
    handler
  };
})(document.querySelector('.content'));

const kittyList = (listElement => {
  const kittyDisplay = listElement;

  function buttonHandler() {
    kittyDisplay.addEventListener(
      'click',
      function(e) {
        /*TODO: fix bug concerning e.target going outside of button.
          use this to target button:
          const kittyButton = document.querySelector('button');
          console.log('this',this, kittyButton); */
        let id = e.target.id;
        octopus.selectKitty(id);
        e.stopPropagation();
      },
      false
    );
  }

  function renderList(cats) {
    kittyDisplay.innerHTML = `<h2>List of Kitties</h2>`;
    cats.forEach(cat => {
      kittyDisplay.innerHTML += `<li><button class="list" id=${cat.id}>${
        cat.name
      }</button></li>`;
    });
  }
  return {
    renderList,
    buttonHandler
  };
})(document.querySelector('.side'));

const viewAdmin = (adminElement => {

})()
