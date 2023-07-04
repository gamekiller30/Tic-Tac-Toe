const b_box = document.querySelectorAll(".board-box");
const win = document.querySelector(".winstatement");
const reset_btn = document.querySelector(".reset-btn");
const xo_box = document.querySelectorAll(".xo-box");
const overlay = document.querySelector(".overlay");
let mytest =[]
let MarkerArray = [];
let counter = 0;

for(let i = 0; i < 9 ; i++){
  MarkerArray[i] = "";
}


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
      let mark;

      for(let i = 0; i < xo_box.length; i++){
        xo_box[i].style.border = "2px solid lightgray";
      }

      if(roundbool === false){
        //console.log(roundbool + "");
        roundbool = true;
        //playerapp.textContent = player1.getName() + " is playing now";
        console.log(player1.getName() + " is playing now");
        xo_box[0].style.border = "2px solid rgb(70, 161, 217)";
        mark = player1.getMarker();
      
      }else{
       // console.log(roundbool + "");
        roundbool = false;
        //playerapp.textContent = player2.getName() + " is playing now";
        xo_box[1].style.border = "2px solid rgb(27, 138, 207)";
        mark =  player2.getMarker();
      }
      return mark;
      }

      let num = 0;
      const checkWin = () =>{

    

        for(let i = 0; i < Axes.length; i++){

          //console.log(i)
        
          num = 0;
         /* console.log(Axes[i] + " Axes at Pos " + i)
          console.log("----------------------------")*/

        
      
          for(let k = 0; k < Axes[i].length; k++){

            if(MarkerArray[Axes[i][k]] == "X"){

              /*Mark the Rows that WON logic
              if(num == 3){
             console.log("AXES " + Axes[i])
              }else{
                console.log("AXES ANYWAYS " + Axes[i])
              }
            */
              num++;

            }else if(MarkerArray[Axes[i][k]] == "O"){
              num--;
            }

             
            
           // console.log("num is " + num)
      
           
        
         
           // console.log(Axes[i][k] + " Pos with new Tech is Marker " + MarkerArray[Axes[i][k]] + " in Marker Arr")
          
          }
          
          announceWin(num);
          console.log(num + " IS THE NUM AN STELLE: " + i)
        
         // console.log("----------------------------")
          //num = 0;
        }
      }
 
      /*
      const rlistener = () =>{
         //Remove Event Listeners
  b_box.forEach(item =>{

    item.removeEventListener("click" , SetMark);
      });
      } */
    
const announceWin = (num) =>{

 

  if(num == 3){
   
   Test = [
    [0, 1, 2]
   ]
   
    overlay.style.display = "flex";
    /*Mark the Rows that WON logic  */
    console.log(Test)
    console.log(" X WIN")
      /*Mark the Rows that WON logic 
    for(let i = 0; i < 3; i++){
      mytest[Test[0][i]].style.backgroundColor = "green";
    }
    */    
   
    console.log(mytest)
    win.textContent = "X won the game";
   
 // rlistener();


  }else if(num == -3){

    Test = [];  
    Test.push(Axes[i]);
    overlay.style.display = "flex";

    win.textContent = "O won the game";
   //rlistener();

  }

}






const Tie = () =>{
//Bei Unentschieden kann man am ende nicht noch knapp gewinnen 


    overlay.style.display = "flex";

    win.textContent = "Tie";
    console.log("Tied with i: " + i)
    console.log("WORKS TIED with num: " + num)
    console.log("TIE")
   //rlistener();

}




const GameReset = () =>{
  num = 0;
  roundbool = false;
  MarkerArray = [];
  win.textContent = "";
  counter = 0;
  overlay.style.display = "none";

  for(let i = 0; i < xo_box.length; i++){
    xo_box[i].style.border = "2px solid lightgray";
  }


  b_box.forEach(item  =>{
  
    item.textContent = "";
    console.log(item + "removed")
  })



}


return {checkWin, roundswitch, GameReset, Tie};

  }
  
  
  
  const player1 = Player("Player1", "X");
  const player2 = Player("Player2", "O");


const gameflow = GameFlow();


let i = 0;
b_box.forEach(item  =>{

  item.value = i;
  item.addEventListener("click", SetMark);
console.log(item.value);
i++;

})


function SetMark (e) {


  if(MarkerArray[e.target.value]  != "X" && MarkerArray[e.target.value]  != "O"){

    const test = gameflow.roundswitch();
    MarkerArray[e.target.value] = test;
    e.target.textContent = test;

    mytest[e.target.value] = e.target;
    console.log(mytest)
    console.log(MarkerArray[e.target.value]);
    console.log(e.target.value);
    console.log(MarkerArray);
    counter++;


    if(counter == 9){
      overlay.style.display = "flex";
  
      win.textContent = "Tie";
      //console.log("MY COUNTER VAR " + counter)
    }
    gameflow.checkWin();
  }


 // console.log("MY COUNTER VAR " + counter)

 



  


}



reset_btn.addEventListener("click", () =>{
  gameflow.GameReset()
});





