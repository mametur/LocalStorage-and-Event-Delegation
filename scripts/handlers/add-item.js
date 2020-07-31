'use strict';

const assert = chai.assert;

console.log('--- loading handler: add-item');

// logic
const add = (item, list) => {
  list.push(item);
}

const addItem = (event, text) => {
  event.preventDefault();   // stop the page from reloading 'default behavior of forms'
  const item = {
    text: text,
    done: false
  };
  add(item, items);
}

// create the actual HTML
function PopulateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type='checkbox' data-index=${i} id='item${i}' ${plate.done ?
        'checked' : ''} />
        <label for="">${plate.text}</label>
        <button data-remove=${i} id=remove${i}><img data-remove=${i} src="https://img.icons8.com/fluent/48/000000/filled-trash.png"/></button>
      </li>
      `;
  }).join('');

};
// Testing
describe('add new items to the list', () => {
  describe('add one item', () => {
    it('add normal string', () => {
      const list = [];

      add('fish', list);
      assert.strictEqual('fish', list[0]);
    });
  });
});

// Handler
const addItemHandler = () => {
  debugger;
  const text = (document.querySelector('[name=item]')).value;
  addItem(event, text);
  PopulateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  addItems.reset();   // clear the input text
}

/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
