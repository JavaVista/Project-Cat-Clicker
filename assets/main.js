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
    viewAdmin.formInit();
    viewAdmin.toggleKittyForm();

  }

  function selectKitty(id) {
    selectedKitty = model.find(cat => {
      return cat.id === Number(id);
    });
    kittyView.render(selectedKitty);
    viewAdmin.renderForm(selectedKitty);
    //selectedKitty = model[0];
  }

  function incrementCat(e) {
    if (e.target && e.target.nodeName == 'IMG') {
      selectedKitty.counter++;
      kittyView.render(selectedKitty);
    }
  }

  function selectButtonKitty(e) {

    viewAdmin.renderForm();
  }

  return {
    init,
    incrementCat,
    selectKitty,
    selectButtonKitty,
    selectedKitty 
  };
})();

// View
const kittyView = (viewElement => {
  let element = viewElement;
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
    <div class="admin edit-kitty">
      <p>Select an Kitty image if you want to edit it or to add a different image</p>
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
        if (e.target && e.target.nodeName == 'BUTTON') {
          let id = e.target.id;
          octopus.selectKitty(id);
        }
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
  let displayAdmin = adminElement;

  const formInit = () => {
	const adminButton = document.querySelector('#edit');
    adminButton.addEventListener('click', octopus.selectButtonKitty, false);
  };

  let editArea = document.getElementById('form');
  const renderForm = (cat) => {

    let test = cat.id;
    console.log(test);
		editArea.innerHTML = `<form class="admin-form">Name:<input type='text' id='name'>
		<br>Image:<input type='text' id='image'>
		<br>Count:<input type='text' id='clicks'>
		<br><button id='save'>Save</button>
		<br><button id='cancel'>Cancel</button>
		</form>`;
    let name = document.getElementById('name').value = cat.name;
    let img = document.getElementById('image').value = cat.image;
    let clicks = document.getElementById('clicks').value = cat.counter;
	};

	function toggleKittyForm() {


  }
  return {
    formInit,
    renderForm,
    toggleKittyForm
  };
})(document.querySelector('.edit-kitty'));

document.addEventListener('DOMContentLoaded', octopus.init);
