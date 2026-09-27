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
  color: "yellow",
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
  x: 310,
  y: 200,
  width: 100,
  height: 100,
  color: "gray"
 };
 function drawCastle() {
  ctx.fillStyle = castle.color;
  ctx.fillRect(castle.x, castle.y, castle.width, castle.height);
  ctx.fillStyle = "black";
  ctx.fillRect(castle.x + 40, castle.y + 60, 20, 40);
  ctx.fillStyle = "darkgray";
  ctx.fillRect(castle.x + 10, castle.y + 10, 20, 20);
  ctx.fillRect(castle.x + 70, castle.y + 10, 20, 20);
 }
 let enemies = [
{ x: 200, y: 500, width: 20, height: 50,  color: "red", speed: 2 },
 { x: 400, y: 500,width: 20,height: 50,color: "red", speed: 2}
];

 function drawEnemies() {
  enemies.forEach(enemy => {
   ctx.fillStyle = enemy.color;
   ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  });
 };
 function swapEnemies() {
  enemies.forEach(enemy => {
   const color = ["red", "blue", "green", "purple", "orange"];
   enemies.push({
    x: Math.random() * (gameCanvas.width - 20),
    y: 500,
    width: 20,
    height: 50,
    color: color[Math.floor(Math.random() * color.length)],
    speed: 2
   });
  });
 }
 setInterval(() => {
  for (let i = 0; i< 10; i++) 
   swapEnemies();
  }, 1000);
  function moveEnemies() {
  enemies.forEach(enemy => {
   enemy.y -= enemy.speed;
  });
 }
  function isColliding(a, b) {
  return (
        a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y
       );
  }
  function checkCollisions() {
   enemies = enemies.filter(enemy => !isColliding(player, enemy));
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
  moveEnemies();
  checkCollisions();
 }

 function draw() {

  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  drawGrass();
  drawCastle();
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
  drawEnemies();
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