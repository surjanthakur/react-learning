document.addEventListener('DOMContentLoaded', () => {
  //* select the board div.
  const board = document.querySelector('.board');

  //* each snake [block] hight & width.
  const blockHight = 50;
  const blockWidth = 50;

  //* get how many colums should we need in a entire board div ok  its [ board-width / block-width(50) ]
  const cols = Math.floor(board.clientWidth / blockWidth);

  //* get how many rows should we need in a entire board div ok  its [ board-hight / block-hight(50) ]
  const rows = Math.floor(board.clientHeight / blockHight);

  //* a blocks array where we store each block with their position-location.
  const blocks = [];

  //* in this loop we create blocks based on rows & colums length then append that block in board also each block have their position location based on which row & colum the block have.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const block = document.createElement('div');
      block.classList.add('block');
      board.appendChild(block);
      blocks[`${row}-${col}`] = block;
    }
  }

  //*in this snake array we have snake with block location based on  x and y axis.
  const snake = [{ x: 1, y: 20 }];

  // *in this function we render the snake array.
  function snakeRender() {
    snake.forEach((el) => {
      blocks[`${el.x}-${el.y}`].classList.add('snakeColor');
    });
  }

  let directions = 'right';
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

  setInterval(() => {
    let head = null;
    if (directions === 'right') {
      head = { x: snake[0].x, y: snake[0].y + 1 };
    } else if (directions === 'left') {
      head = { x: snake[0].x, y: snake[0].y - 1 };
    } else if (directions === 'up') {
      head = { x: snake[0].x - 1, y: snake[0].y };
    } else if (directions == 'down') {
      head = { x: snake[0].x + 1, y: snake[0].y };
    }

    snake.forEach((block) => {
      blocks[`${block.x}-${block.y}`].classList.remove('snakeColor');
    });
    snake.unshift(head);
    snake.pop();
    snakeRender();
  }, 300);
});
