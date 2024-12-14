const king = document.querySelector(".chess-piece");
const square = document.querySelectorAll(".square");
const infoDisplay = document.querySelector("#info");

let beingDragged;
king.addEventListener("dragstart", (e) => {
  beingDragged = e.target;
  console.log("dragging has started on " + beingDragged.id);
});
king.addEventListener("drag", () => {
  console.log(beingDragged.id + " is being dragged");
  infoDisplay.textContent = "You are draggin a " + beingDragged.id;
});
