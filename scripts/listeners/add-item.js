'use strict';
console.log('--- loading listener: add-item');

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

addItems.addEventListener('submit', addItemHandler);
