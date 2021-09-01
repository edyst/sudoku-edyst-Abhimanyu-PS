//  Imported strings of Sudoku from Internet (You can make one for yourself)
const easy = [
  "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
  "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
];
const medium = [
  "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3---",
  "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
];
const hard = [
  "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
  "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
];

// function triggering on window loading 

window.onload = function () {
  alert("Welcome to Abhimanyu's Sudoku");
  id("thats-easy").addEventListener("click", starteasy);
  id("thats-okay").addEventListener("click", startokay);
  id("oops-hard").addEventListener("click", starthard);
}
var isValid = 1;

//  onclick function contains event that will occur the moment you click on any cell
const onClick = function () {
  let y = this.id;
  console.log(y) // (consoling id of particular cell selected)

  clearSelection(); //(Clearing Css property of any other selected cell)

  id(y).classList.add("active"); //(Adding class active to active selected cell which is being clicked)



  // (logic of selecting rows and columns of the celected cell)
  for (let q = 0; q < 81;) {
    let r = y % 9;
    if (r == 0) { r = 9; }
    let e = q + r;
    id(e).classList.add("highlight", "deaf-blue");
    q = q + 9;
    for (let x = 1; x <= 81; x++) {
      for (i = 0; i < 9; i++) {
        let j = i + 1;
        if (y / 9 > i && y / 9 <= j && x / 9 > i && x / 9 <= j) {
          id(x).classList.add("highlight", "deaf-blue");
        }
      }
    }
  }

  // (function for selecting 3x3 grid)
  threebythree(y);

  //  (adding class to already filled functions)
  for (let b = 1; b <= 81; b++) {
    let v = id(b).classList.contains("deaf");
    if (v == true) {
      id(b).classList.remove("highlight", "active");
    }
  }
}

// (loop for bypassing individual cell id which is being clicked on)
for (let l = 1; l <= 81; l++) {
  id(l).onclick = onClick;
}

// (logic for clearing css property of selected cell)
function clearSelection() {
  for (let j = 1; j <= 81; j++) {
    id(j).classList.remove("highlight", "active", "deaf-blue");
  }
}

// (removing wrong class) 
function clearWrong() {
  for (let j = 1; j <= 81; j++) {
    id(j).classList.remove("wrong");
  }
}

// (calling easy Sudoku)
function starteasy() {

  clearprev();
  let board = easy[0];
  start(board);
}

// (calling Medium sudoku)
function startokay() {
  clearprev();
  let board = medium[0];
  start(board);
}

//  (Calling Hard Sudoku)
function starthard() {
  clearprev();
  let board = hard[0];
  start(board);
}

// (clearing previous board)
function clearprev() {
  for (let j = 1; j <= 81; j++) {
    id(j).removeAttribute("readonly");
    id(j).classList.remove("deaf", "highlight", "wrong");
    id(j).value = "";
  }
}

// (filling Sudoku grid)
let g;
function start(board) {
  if (board == easy[0]) {
    g = easy[1];
  }
  if (board == medium[0]) {
    g = medium[1];
  }
  if (board == hard[0]) {
    g = hard[1];
  }
  clearWrong();
  for (let i = 0; i < 81; i++) {
    var z = board.charAt(i);
    if (z != "-") {
      let y = i + 1;
      id(y).value = z;
      id(y).classList.add("deaf");
      id(y).setAttribute("readonly", "true");
      clearSelection();
    }
    else {
      let y = i + 1;
      id(y).setAttribute("onkeyup", "checkDouble()")
    }
  }
}

//  (checking for double filled no)
function checkDouble() {
  clearWrong();
  checkRow();
  checkColumn();
}

// (limiting input from 1 to 9)
function isNumber(e) {
  var key = e.which || e.KeyCode;
  if (key > 48 && key <= 57) {
    return true;
  }
  else return false;
}

// (Validate Function)
id("validate").addEventListener("click", validation);
function validation() {
  let count=0;
  for (x=0; x<81;x++){
    let y= x+1;
    if(g.charAt(x) == id(y).value){
      count++;
    }
  }
  if(count==81){
    alert("Yeah!! Success");
    clearprev();
  }
  else alert("Something Wrong!! Try Again")
}

// (helper functions)
function id(id) {
  return document.getElementById(id);
}
function qs(selector) {
  return document.querySelector(selector);
}
function qsa(selector) {
  return document.querySelectorAll(selector);
}

// (other functions)
function threebythree(y) {
  for (let i = 1; i <= 81; i++) {
    let d = y % 9;
    let s = i % 9;
    if (d == 1 || d == 2 || d == 3) {
      if (s == 1 || s == 2 || s == 3) {
        if (y <= 21 && i <= 21) {
          id(i).classList.add("highlight");
        }
        else if (y > 21 && y <= 48 && i > 21 && i <= 48) {
          id(i).classList.add("highlight");
        }
        else if (y > 48 && y <= 75 && i > 48 && i <= 75) {
          id(i).classList.add("highlight");
        }
      }
    }
    if (d == 4 || d == 5 || d == 6) {
      if (s == 4 || s == 5 || s == 6) {
        if (y <= 24 && i <= 24) {
          id(i).classList.add("highlight");
        }
        else if (y > 24 && y <= 51 && i > 24 && i <= 51) {
          id(i).classList.add("highlight");
        }
        else if (y > 51 && y <= 78 && i > 51 && i <= 78) {
          id(i).classList.add("highlight");
        }
      }
    }
    if (d == 7 || d == 8 || d == 0) {
      if (s == 7 || s == 8 || s == 0) {
        if (y <= 27 && i <= 27) {
          id(i).classList.add("highlight");
        }
        else if (y > 27 && y <= 54 && i > 27 && i <= 54) {
          id(i).classList.add("highlight");
        }
        else if (y > 54 && y <= 81 && i > 54 && i <= 81) {
          id(i).classList.add("highlight");
        }
      }
    }
  }
}

function checkRow() {
  for (let x = 1; x <= 81; x++) {
    for (let y = 1; y <= 81; y++) {
      if ((x % 9 == y % 9) && x != y) {
        if (id(x).value == id(y).value) {
          id(x).classList.add("wrong");
          id(y).classList.add("wrong");
        }
      }
    }
  }
}

function checkColumn() {
  for (let x = 1; x <= 81; x++) {
    for (let y = 1; y <= 81; y++) {
      for (let i = 0; i < 9; i++) {
        let j = i + 1;
        if (x / 9 <= j && y / 9 <= j && x / 9 > i && y / 9 > i && x != y) {
          if (id(x).value == id(y).value) {
            id(x).classList.add("wrong");
            id(y).classList.add("wrong");
          }
        }
      }
    }
  }
}