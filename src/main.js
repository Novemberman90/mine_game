

//game container
let gameContainer = document.createElement('div');
gameContainer.className = ('containerGame');
document.body.appendChild(gameContainer);


//header
 let head = document.createElement('div');
 head.className =('header');
gameContainer.appendChild(head);
document.querySelector('.header');

head.innerHTML= `<span class="titleHead">Minesweeper</span>`;


 //mine board
// Board
    let board = document.createElement('div');
    board.className = ('mineBoard');
    gameContainer.appendChild(board);


    startGame (10,10,12);

    function startGame (width, heigth, mine_count) {
    
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



     
  
    