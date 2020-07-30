'use strict';
console.log('--- loading remove handler: _');

function removeItem(event) {



  if (!event.target.matches('img') && !event.target.matches('button')) return;
  const selectedButton = event.target;
  const indexOfItem = selectedButton.dataset.remove;
  removeItemByUser(items, indexOfItem)
  PopulateList(items, itemsList);
  //store in store localStorage
  localStorage.setItem('items', JSON.stringify(items));


}

/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/
