document.addEventListener('DOMContentLoaded', () => {
  //* select the board div.
  const board = document.querySelector('.board');

  //* each snake [block] hight & width.
  const blockHight = 50;
  const blockWidth = 50;

  const cols = Math.floor(board.clientWidth / blockWidth);

  const rows = Math.floor(board.clientHeight / blockHight);

  const blocks = [];

  let intervalid = null;

  let snakeFood = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };

  const snake = [{ x: 1, y: 20 }];

  let directions = 'right';

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const block = document.createElement('div');
      block.classList.add('block');
      board.appendChild(block);
      blocks[`${row}-${col}`] = block;
    }
  }

  function snakeRender() {
    let head = null;
    blocks[`${snakeFood.x}-${snakeFood.y}`].classList.add('food');

    if (directions === 'right') {
      head = { x: snake[0].x, y: snake[0].y + 1 };
    } else if (directions === 'left') {
      head = { x: snake[0].x, y: snake[0].y - 1 };
    } else if (directions === 'up') {
      head = { x: snake[0].x - 1, y: snake[0].y };
    } else if (directions == 'down') {
      head = { x: snake[0].x + 1, y: snake[0].y };
    }

    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
      clearInterval(intervalid);
      alert('game is over');
    }

    if (snakeFood.x == head.x && snakeFood.y == head.y) {
      blocks[`${snakeFood.x}-${snakeFood.y}`].classList.remove('food');
      snakeFood = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols),
      };
      blocks[`${snakeFood.x}-${snakeFood.y}`].classList.add('food');
      snake.unshift(head);
    }
    snake.forEach((block) => {
      blocks[`${block.x}-${block.y}`].classList.remove('snakeColor');
    });
    snake.unshift(head);
    snake.pop();

    snake.forEach((el) => {
      blocks[`${el.x}-${el.y}`].classList.add('snakeColor');
    });
  }

  // !run this interval after  every 300ms
  intervalid = setInterval(() => {
    snakeRender();
  }, 300);

  addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp') {
      directions = 'up';
    } else if (e.key == 'ArrowDown') {
      directions = 'down';
    } else if (e.key == 'ArrowRight') {
      directions = 'right';
    } else if (e.key == 'ArrowLeft') {
      directions = 'left';
    }
  });
});
