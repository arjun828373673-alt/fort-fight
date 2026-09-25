document.getElementById("start-button").addEventListener("click",() => showView("gameCanvas")); 

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");
 gameCanvas.width = window.innerWidth;
 gameCanvas.height = window.innerHeight;

 const player = {
  x: 50,
  y: 300,
  width: 50,
  height: 50,
  color: "red"
 };
 ctx.fillStyle = player.color;
 ctx.fillRect(player.x, player.y, player.width, player.height);