//Diamond-recursion//
const printDiamond = function(lengthN, character){
  if(lengthN % 2 === 0) {
    lengthN = lengthN - 1;
  }
const characterOrSpace = function(n, character){
if(n<=0){
  return "";
}
return character + characterOrSpace(n-1,character);
  };
  const drawDiamond = function(spaceN, lineN, line){
      if (line>lengthN){
        return "";
      }
      console.log(characterOrSpace(spaceN, " " ) + characterOrSpace(lineN,character));
      if(line<=lengthN/2){
        drawDiamond(spaceN-1, lineN+2, line+1);
      } 
      if(line>lengthN/2) {
        drawDiamond(spaceN+1, lineN-2, line+1);
      }
  };
  drawDiamond(lengthN-1/2,1,1);
};
printDiamond(5,"@");
//Diamond-'for' loop//
const printDiamond = function(lengthN, character) {
  if(lengthN % 2 === 0) {
    lengthN = lengthN - 1;
  }
  const myCharacter = function(n, character) {
    let l = '';
    for(let i=0; i<n; i=i+1) {
      l = l+character;
    }
    return l;
  };
  let spaceN = (lengthN-1)/2;
  let lineN = 1;
  for(let i=1; i<=lengthN; i=i+1){
    console.log(myCharacter(spaceN,' ') + myCharacter(lineN,character));
    if(i<=lengthN/2) {
      spaceN = spaceN - 1;
      lineN = lineN + 2;
    } 
    if(i>lengthN/2) {
      spaceN = spaceN + 1;
      lineN = lineN - 2;
    }
  }
};
printDiamond(5,"@");

//next move function//

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
const nextMove = function(board){
  for (let i=0;i<board.length;i++){
    for (let j=0;j<board.length;j++){
      if(board[i][j]===" "){
        return [i,j];       
      }
    }
  }
};
//make move function//

const makeMove = function(board, location, isX) {
  if((location[0] === 0 || location[0] === 1 || location[0] === 2) && (location[1] === 0 || location[1] === 1 || location[1] === 2)) {
    if(isX) {
      board[location[0]][location[1]] = 'x';
    } else {
      board[location[0]][location[1]] = 'o';
    }
    return 0;
  }
  return -1;
};

//find winner function//
const findWinner = function(board){
  for(i=0;i<board.length;i++){
  if(board[i][0]===board[i][1] && board[i][1]===board[i][2] && board[i][1]!==' '){
    return {
      winner: board[i][0],
      winningLocations: [[i,0],[i,1],[i,2]] //horizonakan//
      } 
    }
  }
  for(i=0;i<board.length;i++){
    if(board[0][i]===board[1][i] && board[1][i]===board[2][i] && board[1][i]!==' '){
    return {
      winner: board[0][i],
      winningLocations: [[0,i],[1,i],[2,i]] //ughghahayac//
        } 
      }
  }
  if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[0][0]!==' '){
  return {
    winner: board[1][1],
    winningLocations: [[0,0],[1,1],[2,2]] //ankyunagic//
    } 
  }
  if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[0][2]!==' '){
  return {
    winner: board[1][1],
    winningLocations: [[0,2],[1,1],[2,0]] //ankyunagic//
    } 
  }
  if(!board.toString().includes(' ')){ 
    return {
      winner: 'No one' //tie-game over//
    }
  }
    return undefined;
};  
 //loop//
let isX = true;
while(true){
  let next = nextMove(board, isX);
  if(makeMove(board, next, isX) === -1) {
    alert("Something is not ok");
    break;
  }
  makeMove(board, next, isX);
  if(findWinner(board) !== undefined) {
    alert("Game over " + findWinner(board)["winner"] + " won!");
    break;
  }
  isX = !isX;
}