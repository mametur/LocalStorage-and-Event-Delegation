'use strict';
console.log('--- loading listener: add-item');

const addItems = document.querySelector('.add-items');
addItems.addEventListener('submit', addItemHandler);