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

let Boardarray = [];
let MarkerArray = [];
let playcount = 0;
const reset_btn = document.querySelector(".reset-btn");
let playerapp = document.querySelector(".playerwon");
let child;
let parent;



const roundswitch = () =>{

  if(roundbool === false){
    console.log(roundbool + "");
    roundbool = true;
    playerapp.textContent = player1.getName() + " is playing now";
    console.log(player1.getName() + " is playing now");
    return player1.getMarker();
  
  }else{
    console.log(roundbool + "");
    roundbool = false;
    playerapp.textContent = player2.getName() + " is playing now";
    return player2.getMarker();
  }
  
  }

  const Reset = () =>{
    Boardarray = [];
 MarkerArray = [];
 playcount = 0;

const children = parent.children;

for(let i = 0; i < children.length; i++){
children[i].textContent = "";
  }
}

reset_btn.addEventListener("click", Reset);

  const PlayerWin = () =>{
    if(roundswitch() != "X"){
      playerapp.textContent = player1.getName() + " won";
     
    }else{
      playerapp.textContent = player2.getName() + " won";
     
    }

   

    Reset();
  }
  
  const Roundover = () => {
    return "Round over, Restart the Game";
  }
  

  /*
  const SetMarker = function (e){

   child.textContent = roundswitch();
  }
 */

  const checkWin = (i) =>{

    //Vertikale
if(((MarkerArray[0] == "X" && MarkerArray[1] == "X" && MarkerArray[2] == "X") || (MarkerArray[0] == "O" && MarkerArray[1] == "O" && MarkerArray[2] == "O")) || ((MarkerArray[3] == "X" && MarkerArray[4] == "X" && MarkerArray[5] == "X") || (MarkerArray[3] == "O" && MarkerArray[4] == "O" && MarkerArray[5] == "O")) || ((MarkerArray[6] == "X" && MarkerArray[7] == "X" && MarkerArray[8] == "X") || (MarkerArray[6] == "O" && MarkerArray[7] == "O" && MarkerArray[8] == "O"))){
  console.log(PlayerWin());
  console.log(Roundover());
  //Horizontale
}else if(((MarkerArray[0] == "X" && MarkerArray[3] == "X" && MarkerArray[6] == "X") || (MarkerArray[0] == "O" && MarkerArray[3] == "O" && MarkerArray[6] == "O")) || ((MarkerArray[1] == "X" && MarkerArray[4] == "X" && MarkerArray[7] == "X") || (MarkerArray[1] == "O" && MarkerArray[4] == "O" && MarkerArray[7] == "O")) || ((MarkerArray[2] == "X" && MarkerArray[5] == "X" && MarkerArray[8] == "X") || (MarkerArray[2] == "O" && MarkerArray[5] == "O" && MarkerArray[8] == "O"))){
  console.log(PlayerWin());
  console.log(Roundover());
}else if(((MarkerArray[0] == "X" && MarkerArray[4] == "X" && MarkerArray[8] == "X") || (MarkerArray[0] == "O" && MarkerArray[4] == "O" && MarkerArray[8] == "O")) || ((MarkerArray[2] == "X" && MarkerArray[4] == "X" && MarkerArray[6] == "X") || (MarkerArray[2] == "O" && MarkerArray[4] == "O" && MarkerArray[6] == "O"))){
  console.log(PlayerWin());
  console.log(Roundover());
}

console.log(MarkerArray);
console.log("Position " + i + " besitzt Wert "+ MarkerArray[i]);

    }
  

const drawBoard = () =>{

 parent = document.querySelector(".board-grid");

for(let i = 0; i < 9; i++){

  child = document.createElement("div");
  child.classList.add("board-box");
  child.addEventListener("click" , function (e){


      if(MarkerArray[i] != "X" && MarkerArray[i] != "O"){


        MarkerArray[i] = roundswitch();
        e.target.textContent =  MarkerArray[i];
        console.log("Marker " + MarkerArray[i])
     
        playcount++;
        console.log(playcount)
        
      }else{
        console.log("Position already in use.");
        
      }

      console.log("Marker " + MarkerArray[i])
      console.log("Marker " + MarkerArray)

 

  checkWin(i)

  if(playcount == 9){
    console.log(Roundover() + " it was a Tie");
    playerapp.textContent = "It was a Tie";
    Reset();
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

