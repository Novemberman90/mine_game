

//game container
let gameContainer = document.createElement('div');
gameContainer.className = ('containerGame');
document.body.prepend(gameContainer);


//header
 let head = document.createElement('div');
 head.className =('header');
gameContainer.prepend(head);
document.querySelector('.header');

head.innerHTML= `<span class="titleHead">Minesweeper</span>`;


 //mine board
// Board
    let board = document.createElement('div');
    board.className = ('mineBoard');
    gameContainer.append(board);


    startGame (10, 10, 12);
      
    function startGame (width, heigth, mine_count) {
      let mineField = board;
      let countSells  = width * heigth;
      mineField.innerHTML = '<button class="button" ></button>'.repeat(countSells);
      let cell = [...mineField.children];
  
      let cloeCount = countSells;


      // create and sort bomb
     let mines = [...Array(countSells).keys()]
     .sort(() => Math.random() - 0.5)
     .slice (0, mine_count);

     //We check that the click is on the button, and not somewhere else

     mineField.addEventListener('click', (event)=> {
      if (event.target.tagName !== 'BUTTON') {
        return;
      }

      //calculate which cell is clicked
      let index = cell.indexOf(event.target);
      let column = index % width;
      let row = Math.floor(index / width); 
      openCell(row, column);
     });

     function validCell(row, column) {
      return row >= 0 && 
      row < heigth &&
       column >= 0 && 
       column < width;
     }

     function countMines (row, column) {
      let counter = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (trueMine(row + y, column + x)) {
            counter++;
          };
        }
      }
      return counter;
     }

     function openCell(row, column){
      //if (!trueMine(row, column))return;
      
      let index = row * width + column;
      let cells = cell[index];
      if (cells.disabled === true){
        return;
      }
      cells.disabled = true; 
      

      if(trueMine(row, column)) {
       // cells.innerHTML = trueMine(row, column) ? '💣' : countMines(row, column); //U+1F4A9
        //cells.disabled = true;
    // }
        cells.innerHTML = '💣';
        alert('game over');
        return;
      }

      cloeCount--;
      if (cloeCount <= mine_count) {
        alert('Winner!');
        return;
      }
      
      let count = countMines(row, column);
      if (count !== 0){
        cells.innerHTML = count;
        return;
      }

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          openCell(row + y, column + x);
        }
      }
    }
 
      /*for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          openCell(row + y, column + x);
        }
      }
     }*/


     function trueMine(row, column) {
      if (!validCell(row, column)) return false;
      let index = row * width + column;
      return mines.includes(index);
     }

    }


/*// mineplace
let mineplace = document.createElement('canvas');
    mineplace.className = ('mineplace');
    board.append(mineplace);


    let settings = {
          columns: 9,
          rows: 9,
          mines: 10,
        size: {
          squareSize: 32,
        },
      }; */



     
  
    