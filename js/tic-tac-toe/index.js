let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";
  console.log(symbols);
  displayTurn(turn);

  checkWin();
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  document.querySelector(".turn").textContent = `${turn.toUpperCase()} turn`; 
}

function checkLine(turn, first, second, third) {
  return first === turn && second === turn && third === turn;  
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  for(let i = 0; i < 3; i++) {
    if(checkLine(turn, symbols[0][i], symbols[1][i], symbols[2][i]) ||
       checkLine(turn, symbols[i][0], symbols[i][1], symbols[i][2]) ||
       checkLine(turn, symbols[0][0], symbols[1][1], symbols[2][2]) ||
       checkLine(turn, symbols[0][2], symbols[1][1], symbols[2][0])
    ){
      reset()
      alert(`Wygrywa ${turn.toUpperCase()}`)
      return;
    }
  }  
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
function reset() {
  // 4. zresetuj stan gry
  symbols = new Array(3).fill(null).map(_ => new Array(3).fill(""));
  turn = "x";
  for(const tile of tiles) {
    tile.classList = ["tile"];
  }
  displayTurn(turn);
}
document.querySelector(".reset").addEventListener("click", reset)
