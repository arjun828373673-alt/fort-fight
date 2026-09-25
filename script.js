document.getElementById("start-button").addEventListener("click",() => showView("gameCanvas")); 

const gameCanvas = document.getElementById("game-Canvas");
const ctx = gameCanvas.getContext("2d");
 gameCanvas.width = 500;
 gameCanvas.height = 500;

 const player = {
  x: 50,
  y: 300,
  width: 50,
  height: 50,
  color: "red"
 };
 ctx.fillStyle = player.color;
 ctx.fillRect(player.x, player.y, player.width, player.height);
 
 function showView(id) {
  document.querySelectorAll(".game-section, #gameCanvas").forEach(el => {
    el.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}