const b_box = document.querySelectorAll(".board-box");
const win = document.querySelector(".winstatement");
const reset_btn = document.querySelector(".reset-btn");
let mytest =[]
let MarkerArray = [];
let Test = [];
const Axes = [
  //Vertikale
[0, 1 ,2],
[3, 4 , 5],
[6, 7 ,8],

//Horizontale
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],

//Quer
[0, 4, 8],
[2 , 4, 6]

];

const Player = (name, marker) =>{

  const getName = () => name;
  const getMarker = () => marker;
  return {getName, getMarker};
  
  }

  const GameFlow = () =>{

    let roundbool = false;

    const roundswitch = () =>{
      

      if(roundbool === false){
        console.log(roundbool + "");
        roundbool = true;
        //playerapp.textContent = player1.getName() + " is playing now";
        console.log(player1.getName() + " is playing now");
        return player1.getMarker();
      
      }else{
        console.log(roundbool + "");
        roundbool = false;
        //playerapp.textContent = player2.getName() + " is playing now";
        return player2.getMarker();
      }
      
      }


      const checkWin = () =>{

        let num = 0;

        for(let i = 0; i < Axes.length; i++){
        
         num = 0;
      
          console.log(Axes[i] + " Axes at Pos " + i)
          console.log("----------------------------")
      
          for(let k = 0; k < Axes[i].length; k++){
      
            if(MarkerArray[Axes[i][k]] == "X"){

              /*Mark the Rows that WON logic
         if(num === 3){
              Test.push(Axes[i][k]);
           }
*/

              num++;

            }else if(MarkerArray[Axes[i][k]] == "O"){
              num--;
            }
            console.log("num is " + num)
      
            announceWin(num);
        
         
            console.log(Axes[i][k] + " Pos with new Tech is Marker " + MarkerArray[Axes[i][k]] + " in Marker Arr")
          
            
          }
          console.log("----------------------------")
        }
      }
    
const announceWin = (num) =>{

  if(num == 3){
   
    /*Mark the Rows that WON logic  
Test = [

];*/
    console.log(" X WIN")
      /*Mark the Rows that WON logic
    for(let i = 0; i < 3; i++){
      mytest[Test[0][i]].style.backgroundColor = "green";
    }
        console.log(Test)
    */
    console.log(mytest)
    win.textContent = "X won";
  }else if(num == -3){
    win.textContent = "O won";
  }

}

const GameReset = () =>{
  num = 0;
  roundbool = false;
  MarkerArray = [];

  b_box.forEach(item  =>{
  
    item.textContent = "";
    console.log(item + "removed")
  })

}


return {checkWin, roundswitch, GameReset};

  }
  
  
  
  const player1 = Player("Player1", "X");
  
  /*console.log(player1.getName());
  console.log(player1.getMarker());*/
  
  const player2 = Player("Player2", "O");
  
  /*console.log(player2.getName());
  console.log(player2.getMarker()); */

  

const gameflow = GameFlow();


let i = 0;
b_box.forEach(item  =>{

  item.value = i;
  item.addEventListener("click", SetMark);
console.log(item.value);
i++;

})


function SetMark (e) {

  e.target.textContent = gameflow.roundswitch();
  MarkerArray[e.target.value] = e.target.textContent;
  mytest[e.target.value] = e.target;
  console.log(mytest)
  console.log(MarkerArray[e.target.value]);
  console.log(e.target.value);
  console.log(MarkerArray)
  //console.log("TEST "+ Test)
  gameflow.checkWin();

}



reset_btn.addEventListener("click", () =>{
  gameflow.GameReset()
});





