const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 4;
let gameframe = 0;
const staggerFrame = 2;

function animate() {
  // clearRect(x, y, width, height)
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // fillRect(x, y, width, height)
  //   ctx.fillRect(50, 50, 100, 100);
  //drawImage(image, dx, dy)
  //   ctx.drawImage(playerImage, 50, 50);
  //   drawImage(image, dx, dy, dWidth, dHeight) array of images
  // ctx.drawImage(playerImage, 50, 50, CANVAS_WIDTH, CANVAS_HEIGHT);
  // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight): sprite sheets
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  if (gameframe % staggerFrame == 0) {
    if (frameX < 10) frameX++;
    else frameX = 0;
  }
  gameframe++;
  // call the parent function create a endless loop
  requestAnimationFrame(animate);
}

animate();
