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
  let selectedKitty = model[0];
  function init() {
    kittyView.handler();
    kittyList.buttonHandler();
    kittyList.renderList(model);
  }

  function selectKitty(id) {
    selectedKitty = model.find(cat => {
      return cat.id === Number(id);
    });
    kittyView.render(selectedKitty);
    viewAdmin.renderForm(selectedKitty);
  }

  function incrementCat(e) {
    if (e.target && e.target.nodeName == 'IMG') {
      selectedKitty.counter++;
      kittyView.render(selectedKitty);
    }
  }

  function toggleAdmin() {
    let formDisplay = document.querySelectorAll('.admin-form');
    formDisplay.forEach(admin => admin.classList.toggle('admin-show'));
  }

  function updateKitty(name, image, counter, id) {
    let index = model.indexOf(selectedKitty);
    selectedKitty = {
      name: name,
      image: image,
      counter: counter,
      id: id
    };
    model[index] = selectedKitty;
    kittyList.renderList(model);
    kittyView.render(selectedKitty);
  }

  return {
    init,
    incrementCat,
    selectKitty,
    toggleAdmin,
    selectedKitty,
    updateKitty
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

const viewAdmin = (() => {
  const clickAdmin = () => {
    const adminButton = document.getElementById('edit');
    const cancelButton = document.getElementById('cancel');
    adminButton.addEventListener('click', octopus.toggleAdmin, false);
    cancelButton.addEventListener('click', octopus.toggleAdmin, false);
  };

  const save = (newName, newImg, clicks, id) => {
    const saveButton = document.getElementById('save');
    saveButton.addEventListener('click', e => {
      newName = document.getElementById('name').value;
      newImg = document.getElementById('image').value;
      clicks = document.getElementById('clicks').value;
      e.preventDefault();
      e.target;
      octopus.updateKitty(newName, newImg, clicks, id);
    });
  };

  let editArea = document.getElementById('form');
  const renderForm = cat => {
    editArea.innerHTML = `<form class="admin-form">Name:<input type="text" name="id" id="name">
		<br>Image:<input type="text" name="image" id="image">
		<br>Count:<input type="text" name="clicks" id="clicks">
		<br><button type="submit" id="save">Save</button>
		<br><button type="reset" id="cancel">Cancel</button>
    </form>`;
    let name = (document.getElementById('name').value = cat.name);
    let img = (document.getElementById('image').value = cat.image);
    let clicks = (document.getElementById('clicks').value = cat.counter);
    let id = cat.id;
    clickAdmin();
    save(name, img, clicks, id);
  };

  return {
    clickAdmin,
    renderForm,
    save
  };
})();

document.addEventListener('DOMContentLoaded', octopus.init);
