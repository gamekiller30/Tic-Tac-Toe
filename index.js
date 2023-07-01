const Player = (name, marker) =>{

const getName = () => name;
const getMarker = () => marker;
return {getName, getMarker};

}



const player1 = Player("Player1", "X");
console.log(player1.getName());
console.log(player1.getMarker());

const player2 = Player("Player2", "O");
console.log(player2.getName());
console.log(player2.getMarker());



const GameFlow = (roundbool) =>{
  
const Boardarray = [];
const MarkerArray = [];
let playcount = 0;

let child;

const roundswitch = () =>{

  if(roundbool === false){
    console.log(roundbool + "");
    roundbool = true;
    console.log(player1.getName() + " is playing now");
    return player1.getMarker();
  
  }else{
    console.log(roundbool + "");
    roundbool = false;
    console.log(player2.getName() + " is playing now");
    return player2.getMarker();
  }
  
  }

  const PlayerWin = () =>{
    const playerwon = roundswitch();
    return `Player ${playerwon} has won the Game`;
  
  
  }
  
  const Roundover = () => {
    return "Round over, Restart the Game";
  }
  

  /*
  const SetMarker = function (e){

   child.textContent = roundswitch();
  }
 */

const drawBoard = () =>{

const parent = document.querySelector(".board-grid");

for(let i = 0; i < 9; i++){

  child = document.createElement("div");
  child.classList.add("board-box");
  child.addEventListener("click" , function (e){


      if(MarkerArray[i] != "X" && MarkerArray[i] != "O"){

        e.target.textContent = roundswitch();
        console.log("Marker " + MarkerArray[i])
        MarkerArray[i] = e.target.textContent;
        playcount++;
 console.log(playcount)
        
      }else{
        console.log("Position already in use.");
        
      }

      console.log("Marker " + MarkerArray[i])
      console.log("Marker " + MarkerArray)

  if(playcount == 9){
   console.log(Roundover());
  }



  });

  parent.appendChild(child);
  console.log(i + " child created");
  Boardarray.push(child);
}

}

return {drawBoard};
}


const startgame = GameFlow(false);
startgame.drawBoard();

