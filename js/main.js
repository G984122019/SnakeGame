ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, 20, 20);
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py})
  for (let i=0; i<snake.length-1; i++){
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    if(snake[i].x == px && snake[i].y == py) {
      tail = MIN;
      console.log("衝突");
    }
  }
  while (snake.length > tail) {
    snake.shift();
  }
  if (appleX == px && appleY == py) {
    tail++;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
    appleX2 = Math.floor(Math.random()*canv.width/SIZE);
    appleY2 = Math.floor(Math.random()*canv.height/SIZE);
    console.log("りんご");
  }
  ctx.fillStyle ="red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2);

  if (appleX2 == px && appleY2 == py) {
    tail--;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
    appleX2 = Math.floor(Math.random()*canv.width/SIZE);
    appleY2 = Math.floor(Math.random()*canv.height/SIZE);
    console.log("毒りんご");
  }
  ctx.fillStyle ="purple";
  ctx.fillRect(appleX2*SIZE, appleY2*SIZE, SIZE-2, SIZE-2);

  if (snake.length < 1) Gameover();
  if (px < 0) {
    px = canv.width/SIZE;
  }
  if (py < 0) {
    py = canv.height/SIZE;
  }
  if (px > canv.width/SIZE) {
    px = -1;
  }
  if (py > canv.height/SIZE) {
    py = -1;
  }
}, 1000/FPS);

function Gameover() {
  alert("ゲームオーバー");
  clearInterval();
}
