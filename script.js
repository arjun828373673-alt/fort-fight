document.getElementById("start-button").addEventListener("click",() => showView("gameCanvas")); 

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");
 gameCanvas.width = 800;
 gameCanvas.height = 600;

 const player = {
  x: 300,
  y: 400,
  width: 50,
  height: 50,
  color: "red",
  speed: 5
 };
 ctx.fillStyle = player.color;
 ctx.fillRect(player.x, player.y, player.width, player.height);

 const grass = {
  x: 800,
  y: 299,
  width: 800,
  height: 600,
  color: "green"
 };
 ctx.fillStyle = grass.color;
 ctx.fillRect(grass.x, grass.y, grass.width, grass.height);

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
 }
 function draw() {
  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
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