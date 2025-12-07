const board = document.querySelector('.board');
const blockHight = 30;
const blockWidth = 30;

// create columns and rows accourding to width and hight of screen
const col = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHight);

// create blocks  based on col*rows
for (let i = 0; i < col * rows; i++) {
  const block = document.createElement('div');
  block.classList.add('block');
  board.appendChild(block);
}
