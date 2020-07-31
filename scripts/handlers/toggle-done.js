'use strict';
console.log('--- loading handler: toggleDone');

const toggleDone = (event) => {
  if (!event.target.matches('input')) return ; // ignore if the DOM element is not input
    const el = event.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    PopulateList(items, itemsList)
};

/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
