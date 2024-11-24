let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector("#reset");
let turno = true; //playerx playero
let winner = document.querySelector("#winner");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#newgame");
let chancecount = 0 ;
const order = [[0,1,2],
               [0,3,6],
               [0,4,8],
               [1,4,7],
               [2,5,8],
               [2,4,6],
               [3,4,5],
               [6,7,8],
              ];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if(turno){
            box.innerText = "O";
            box.style.color = "black";
            turno = false;
        }
        else{
            box.innerText = "X";
            turno = true;
            box.style.color = "white";
        }
        box.disabled = true;
        chancecount += 1;
        checkwinner();
        showdraw(chancecount);
    })
});

checkwinner = () => {
    for(pattern of order){
        let patt1 = boxes[pattern[0]].innerText;
        let patt2 = boxes[pattern[1]].innerText
        let patt3 = boxes[pattern[2]].innerText;
        if(patt1 != "" && patt2 != "" && patt3 != ""){
            if(patt1 === patt2 && patt2 === patt3){
                console.log("winner is " + patt1);
                showwinner(patt1);
            } 
        }
    }
}

let showdraw = (count) => {
    if(count === 9){
        winner.innerText = "Opps there is no winner";
        msg.style.visibility = "visible";
        newgame.style.visibility = "visible";
        disabledbtn();
    }
}

let showwinner = (win) => {
    winner.innerText = `Conguralations, winner is ${win}`;
    msg.style.visibility = "visible";
    newgame.style.visibility = "visible";
    disabledbtn();
}

let disabledbtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let enablebtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        winner.innerText = "";
        newgame.style.visibility = "hidden"
    }
}

let resetgame = () => {
    turno = true;
    enablebtn();
}

reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);
