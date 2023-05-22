

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


    startGame (10,10,12);

    function startGame (width, heigth, mine_count) {
      let mineField = board;
      let countSells  = width*heigth;
     mineField.innerHTML = '<button class= "button" > </button> '.repeat(countSells);
     let cell = [ mineField.children];
  

     let mines = [Array(countSells).keys()]
     .sort(() => Math.random() -0.5)
     .slice (0, mine_count);

     mineField.addEventListener('click', (Event)=> {
      if(Event.target.tagName !== 'BUTTON') {
        return
      }

      let index = cell.indexOf(Event.target);
      let colums = index % width;
      let row = Math.floor(index - colums); 
      Event.target.innerHTML = trueMine() ? 'U+1F4A9' : ' '; //U+1F4A9
     });

     function trueMine(row, colums) {
      let index = row * width + colums;
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



     
  
    