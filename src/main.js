

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


    startGame (10, 10, 15);

    function startGame (width, heigth, mine_count) {
      let mineField = board;
      let countSells  = width * heigth;
      mineField.innerHTML = '<button class="button" ></button>'.repeat(countSells);
      let cell = [...mineField.children];
  
      // create bomb
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


     function openCell(row, column){
      let index = row * width + column;
      let cells = cell(index);
      cells.target.innerHTML = trueMine(row, column) ? '💣' : ' '; //U+1F4A9
      cells.target.disabled = true;
     }

     function trueMine(row, column) {
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



     
  
    