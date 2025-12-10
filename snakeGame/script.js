document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('.board');
  const blockHight = 50;
  const blockWidth = 50;

  const cols = Math.floor(board.clientWidth / blockWidth);
  const rows = Math.floor(board.clientHeight / blockHight);

  const blocks = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const block = document.createElement('div');
      block.classList.add('block');
      board.appendChild(block);
      blocks[`${row}-${col}`] = block;
    }
  }

  const snake = [
    { x: 1, y: 20 },
    { x: 1, y: 21 },
    { x: 1, y: 22 },
  ];

  function snakeRender() {
    snake.forEach((el) => {
      blocks[`${el.x}-${el.y}`].classList.add('snakeColor');
    });
  }

  let directions = 'left';

  setInterval(() => {
    let head = null;
    if (directions === 'left') {
      head = { x: snake[0].x, y: snake[0].y - 1 };
    }

    snake.forEach((el) => {
      blocks[`${el.x}-${el.y}`].classList.remove('snakeColor');
    });

    snake.unshift(head);
    snake.pop();
    snakeRender();
  }, 300);
});
