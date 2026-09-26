document.getElementById("start-button").addEventListener("click",() => showView("gameCanvas")); 

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");
 gameCanvas.width = 800;
 gameCanvas.height = 600;

 const player = {
  x: 300,
  y: 400,
  width: 15,
  height: 50,
  color: "black",
  speed: 5
 };
 ctx.fillStyle = player.color;
 ctx.fillRect(player.x, player.y, player.width, player.height);

 const grass = {
  x: 0,
  y: 299,
  width: 800,
  height: 301,
  color: "green"
 };
 function drawGrass() {
  ctx.fillStyle = grass.color;
  ctx.fillRect(grass.x, grass.y, grass.width, grass.height);
 }
 const castle = {
  x: 600,
  y: 200,
  width: 100,
  height: 100,
  color: "gray"
 };
 function drawCastle() {
  ctx.fillStyle = "red";
  ctx.fillRect(castle.x + 90, castle.y - 10, 40, 100);
  ctx.fillStyle = castle.color;
  ctx.fillRect(castle.x, castle.y, castle.width, castle.height);
  ctx.fillStyle = "black";
  ctx.fillRect(castle.x + 40, castle.y + 60, 20, 40);
  ctx.fillStyle = "darkgray";
  ctx.fillRect(castle.x + 10, castle.y + 10, 20, 20);
  ctx.fillRect(castle.x + 70, castle.y + 10, 20, 20);
 }
 
 const keys = {};
 
 document.addEventListener("keydown", (event) => {
  keys[event.key] = true;
 });
document.addEventListener("keyup", (event) => {
  keys[event.key] = false;
 });

 function update() {
  if (keys["ArrowUp"] || keys["w"]) player.y -= player.speed;
  if (keys["ArrowDown"] || keys["s"]) player.y += player.speed;
  if (keys["ArrowLeft"] || keys["a"]) player.x -= player.speed;
  if (keys["ArrowRight"] || keys["d"]) player.x += player.speed;

  player.x = Math.max(0, Math.min(player.x, gameCanvas.width - player.width));
  player.y = Math.max(grass.y, Math.min(player.y, gameCanvas.height - player.height));
 }

 function draw() {

  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  drawGrass();
  drawCastle();
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

 }  function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
 }

 function showView(id) {
  document.querySelectorAll(".game-section, #gameCanvas").forEach(el => {
    el.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
gameLoop();